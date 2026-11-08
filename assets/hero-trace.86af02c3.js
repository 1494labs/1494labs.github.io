/* Homepage preview hero (/v2/ and /v3/): pick a figure, see the entries behind it.
   One module for both previews. The ledger layer is a flag on the root element
   (data-ledger="1"); everything here is the same either way.

   Static on purpose: the reference-fund figures are embedded, nothing is fetched.
   The same six accounts, as to the cent, as the table further down the home page.
   Each account's income is its share of opening capital, and its fee is that income
   minus its net P&L, so every trace foots. tests/site/hero-trace.test.mjs asserts it. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.HeroTrace = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var DATA = [
    ['WBE-001-A', 6284337.90, 33687.42, 6318025.32],
    ['WBE-003-A', 5459391.06, 29265.26, 5488656.32],
    ['WBE-006-A', 3774244.32, 20231.97, 3794476.29],
    ['WBE-002-A', 3420147.35, 18333.82, 3438481.17],
    ['WBE-005-A', 2519062.68, 13503.53, 2532566.21],
    ['WBE-004-A', 2042319.76, 10947.93, 2053267.69]
  ];
  var OPEN = 23499503.07, INCOME = 145284.59, FEE = 19314.66, PNL = 125969.93, NAV = 23625473.00;

  // Money from a number: $1,234.50, or −$1,234.50 (a true minus sign, not a hyphen).
  function fmt(n) {
    var s = Math.abs(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (n < 0 ? '−$' : '$') + s;
  }
  function pct(n) { return (n * 100).toFixed(3) + '%'; }
  function round2(n) { return Math.round(n * 100) / 100; }

  // One account's split: its share of opening capital, its income, and the fee
  // that makes income less fee equal its net P&L.
  function parts(i) {
    var d = DATA[i];
    var share = d[1] / OPEN;
    var inc = round2(INCOME * share);
    var fee = round2(inc - d[2]);
    return { id: d[0], open: d[1], pnl: d[2], end: d[3], share: share, inc: inc, fee: fee };
  }

  function step(n, text, amt) { return { n: String(n), text: text, amt: amt }; }

  // pick: 'nav' | 'open-total' | 'pnl-total' | 'open:<i>' | 'pnl:<i>' | 'end:<i>'
  function buildTrace(pick) {
    if (pick === 'nav') {
      return {
        ask: 'the fund’s ending NAV of ' + fmt(NAV),
        label: 'Ending investor capital, and the NAV',
        value: fmt(NAV),
        steps: [
          step(1, 'Opening capital, six accounts', fmt(OPEN)),
          step(2, 'Net income for the month', fmt(INCOME)),
          step(3, 'Management fee, through the fee calculation', fmt(-FEE)),
          step(4, 'Net P&L allocated by opening capital', fmt(PNL))
        ]
      };
    }
    if (pick === 'open-total') {
      return {
        ask: 'opening investor capital of ' + fmt(OPEN),
        label: 'Opening investor capital',
        value: fmt(OPEN),
        steps: DATA.map(function (d, i) {
          return step(i + 1, d[0] + ', from last month’s close', fmt(d[1]));
        })
      };
    }
    if (pick === 'pnl-total') {
      return {
        ask: 'net P&L allocated of ' + fmt(PNL),
        label: 'Net P&L to allocate',
        value: fmt(PNL),
        steps: [
          step(1, 'Net income for the month', fmt(INCOME)),
          step(2, 'Management fee, from the fund’s saved terms', fmt(-FEE)),
          step(3, 'Allocated across six accounts by opening capital', fmt(PNL))
        ]
      };
    }
    var bits = pick.split(':');
    var kind = bits[0];
    var p = parts(Number(bits[1]));
    if (kind === 'open') {
      return {
        ask: p.id + '’s opening capital of ' + fmt(p.open),
        label: p.id + ' · opening capital',
        value: fmt(p.open),
        steps: [
          step(1, 'Closing capital at last month’s frozen close', fmt(p.open)),
          step(2, 'Percentage ownership of the fund’s opening capital', pct(p.share))
        ]
      };
    }
    if (kind === 'pnl') {
      return {
        ask: 'the ' + fmt(p.pnl) + ' of profit allocated to ' + p.id,
        label: p.id + ' · net P&L allocated',
        value: fmt(p.pnl),
        steps: [
          step(1, 'Percentage ownership of opening capital', pct(p.share)),
          step(2, 'Share of net income for the month', fmt(p.inc)),
          step(3, 'Share of the management fee', fmt(-p.fee)),
          step(4, 'Allocation entry posted to this account', fmt(p.pnl))
        ]
      };
    }
    return {
      ask: p.id + '’s ending capital of ' + fmt(p.end),
      label: p.id + ' · ending capital',
      value: fmt(p.end),
      steps: [
        step(1, 'Opening capital', fmt(p.open)),
        step(2, 'Net P&L allocated', fmt(p.pnl)),
        step(3, 'Ending capital, one of six that make the NAV', fmt(p.end))
      ]
    };
  }

  var SENT_NOTE = 'Read-only. The auditor sees this trace and the entries behind it, nothing else.';
  var IDLE_NOTE = 'The trace and its entries, as one read-only link.';
  // Below this width the statement sits above the request and the trace; keep in step with the CSS.
  var STACKED = '(max-width: 1239.98px)';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function mount(host) {
    var tbody = host.querySelector('[data-rows]');
    var tfoot = host.querySelector('[data-totals]');
    var askEl = host.querySelector('[data-ask]');
    var panel = host.querySelector('[data-panel]');
    var labelEl = host.querySelector('[data-label]');
    var valueEl = host.querySelector('[data-value]');
    var stepsEl = host.querySelector('[data-steps]');
    var noteEl = host.querySelector('[data-note]');
    var sendEl = host.querySelector('[data-send]');
    // The audit request and auditor button are optional: /v5/ (#2146) has neither.
    if (!tbody || !tfoot || !panel || !labelEl || !valueEl || !stepsEl) return;

    var state = { pick: 'nav', sent: false };
    var figs = [];  // { pick, btn, row }

    function figure(pick, text, name) {
      var td = el('td');
      var b = el('button', 'fig', text);
      b.type = 'button';
      b.setAttribute('aria-label', name + ', ' + text);
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { choose(pick); });
      td.appendChild(b);
      return { td: td, btn: b };
    }

    DATA.forEach(function (d, i) {
      var tr = el('tr');
      var th = el('th', '', d[0]);
      th.scope = 'row';
      tr.appendChild(th);
      [['open', 'Opening', d[1]], ['pnl', 'Net P&L', d[2]], ['end', 'Ending', d[3]]].forEach(function (c) {
        var f = figure(c[0] + ':' + i, fmt(c[2]), d[0] + ' ' + c[1].toLowerCase());
        f.td.setAttribute('data-label', c[1]);
        tr.appendChild(f.td);
        figs.push({ pick: c[0] + ':' + i, btn: f.btn, row: tr, account: i });
      });
      tbody.appendChild(tr);
    });

    var trow = el('tr');
    var tth = el('th', '', 'Six accounts');
    tth.scope = 'row';
    trow.appendChild(tth);
    [['open-total', 'Opening', OPEN, 'Opening capital, six accounts'],
     ['pnl-total', 'Net P&L', PNL, 'Net P&L, six accounts'],
     ['nav', 'Ending', NAV, 'Ending capital and NAV, six accounts']].forEach(function (c) {
      var f = figure(c[0], fmt(c[2]), c[3]);
      f.td.setAttribute('data-label', c[1]);
      trow.appendChild(f.td);
      figs.push({ pick: c[0], btn: f.btn, row: null, account: -1 });
    });
    tfoot.appendChild(trow);

    function render() {
      var t = buildTrace(state.pick);
      var selAccount = state.pick.indexOf(':') > -1 ? Number(state.pick.split(':')[1]) : -1;
      figs.forEach(function (f) {
        f.btn.setAttribute('aria-pressed', f.pick === state.pick ? 'true' : 'false');
        if (f.row) f.row.classList.toggle('is-sel', f.account === selAccount);
      });
      if (askEl) askEl.textContent = 'Please provide support for ' + t.ask + '.';
      labelEl.textContent = t.label;
      valueEl.textContent = t.value;
      stepsEl.textContent = '';
      t.steps.forEach(function (s) {
        var li = el('li');
        li.appendChild(el('span', 'n', s.n));
        li.appendChild(el('span', 't', s.text));
        li.appendChild(el('span', 'a', s.amt));
        stepsEl.appendChild(li);
      });
      if (sendEl) sendEl.textContent = state.sent ? 'Link copied' : 'Copy link for the auditor';
      if (noteEl) noteEl.textContent = state.sent ? SENT_NOTE : IDLE_NOTE;
    }

    function choose(pick) {
      state.pick = pick;
      state.sent = false;
      render();
      if (window.matchMedia && window.matchMedia(STACKED).matches) {
        var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        panel.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
      }
    }

    // No link is built or copied: no shareable auditor link exists yet.
    if (sendEl) {
      sendEl.addEventListener('click', function () {
        state.sent = true;
        render();
      });
    }

    render();
  }

  if (typeof document !== 'undefined') {
    var go = function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-hero-trace]'), mount);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
    else go();
  }

  return { DATA: DATA, OPEN: OPEN, INCOME: INCOME, FEE: FEE, PNL: PNL, NAV: NAV,
           fmt: fmt, pct: pct, parts: parts, buildTrace: buildTrace, mount: mount };
});
