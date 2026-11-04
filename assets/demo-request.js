/* Request metadata travels only with the ordinary form submission. */
(() => {
  const form = document.querySelector('form.signup');
  if (!form) return;

  const segments = new Set([
    'hedge', 'pevc', 'fof', 'family-office', 'administrator', 'registered', 'other',
  ]);
  const segment = new URLSearchParams(window.location.search).get('segment');
  if (segments.has(segment)) {
    form.elements.runs.value = segment;
    form.elements.entry_segment.value = segment;
  }

  let startedAt = '';
  form.addEventListener('focusin', () => {
    if (!startedAt) startedAt = new Date().toISOString();
  });
  form.addEventListener('submit', () => {
    const submittedAt = new Date().toISOString();
    form.elements.request_started_at.value = startedAt || submittedAt;
    form.elements.request_submitted_at.value = submittedAt;
    // One request receipt, never stored on the device or reused across visits.
    if (window.crypto && window.crypto.randomUUID) {
      form.elements.request_id.value = window.crypto.randomUUID();
    }
  });
})();
