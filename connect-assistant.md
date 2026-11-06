Source: https://1494labs.com/connect-assistant/

# Connect an assistant to your fund accounting workspace

Ask about funds and saved analyses through MCP, the standard connector for AI tools. Reads use your workspace permissions.

Connection guide · November 3, 2026

## What you need

An existing 1494 Labs workspace, an administrator who has enabled AI for that workspace, and an MCP client that supports Streamable HTTP with a custom Authorization header. This connection reads workspace data. There is no anonymous demo endpoint.

1. **Enable workspace AI.** An administrator enables AI under Administration › Workspace › AI & budget. When AI is off, MCP returns HTTP 403 with `ai_disabled`.

2. **Create a read-only key.** Under Administration › People & access › API Keys, choose Read-only or the specific read permissions you need. The key remains bound to its workspace and its creator's permissions. Copy the secret when shown and keep it in your client's credential store.

3. **Set the connection URL.** Use your workspace's application origin followed by `/api/v1/mcp`. For example, if you sign in at `https://your-workspace.example.com`, the URL is `https://your-workspace.example.com/api/v1/mcp`. Replace this illustrative origin with your actual workspace address; the marketing site is not the endpoint.

4. **Configure authentication.** Set `Authorization: Bearer <your-workspace-api-key>`. Use the Bearer header for this connection so credentials reach downstream reads. The endpoint also accepts a live session access token. Browser sessions use their access cookie and require the matching `X-CSRF-Token` on POST requests.

5. **Connect and discover tools.** Your client initializes the connection and lists tools. Start with `list_funds`, then discover the reads or saved analyses needed for your question.

Use a client that lets you supply the header. This endpoint does not provide an OAuth sign-in flow. If your assistant only offers OAuth connections, ask [hello@1494labs.com](mailto:hello@1494labs.com) about a compatible setup. Share credentials only through the client's credential settings, never in a conversation.

## The five tools

| Tool | Use it for |
| --- | --- |
| `list_funds` | Find funds by code or name and resolve their UUIDs. Optional `q` filters the list; `limit` controls the page size. |
| `search_api` | Find GET endpoints by a phrase such as "trial balance" or "capital account." Returns paths and parameters for a subsequent read. |
| `read_api` | Read a discovered `/api/v1/` path, passing its filters in `query`. Substitute real IDs for path placeholders and follow the endpoint's pagination when needed. |
| `list_saved_calcs` | Find saved analyses. Call without arguments for available grid keys, then pass a `grid_key` to list analyses on that table. Another user's private analyses are excluded. |
| `run_saved_calc` | Recompute an accessible saved analysis from the live book using its `calc_id`. Optional `fund_id`, `period_id` and `as_of` override its saved context. An empty subtotal with a reason is not zero. |

## A first question and answer

**Question:** "Which fund matches DEMO-PE? Tell me its legal name and currency."

The assistant calls `list_funds` with `{"q":"DEMO-PE","limit":10}`. Suppose the returned fund has `fund_code` DEMO-PE, `legal_name` Example Private Equity Fund LP and `base_currency_code` USD.

**Illustrative answer:** "DEMO-PE is Example Private Equity Fund LP. Its base currency is USD. Source: the workspace fund record returned by list_funds." These synthetic names and values illustrate the response. If several funds match, the assistant should ask which one you mean.

For an accounting question, keep that fund's returned `id`, use `search_api` to find the relevant read, then call `read_api` with the fund ID and the endpoint's required period parameters. Ask the assistant to name the fund, period and source, and to say when data is missing.

## Check the connection directly

A compatible client sends JSON-RPC 2.0 messages by HTTP POST with `Content-Type: application/json` and `Accept: application/json, text/event-stream`. For example, after setting the URL and Bearer header in its connection settings, it sends:

```
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"workspace-reader","version":"1.0"}}}
```

Read the negotiated protocol version in the response, send `notifications/initialized` without an ID, then `tools/list`:

```
{"jsonrpc":"2.0","id":2,"method":"tools/list"}
```

The initialized notification returns HTTP 202 with no body. Calls return JSON. The server keeps no MCP session and has no server-push stream; a GET to the connection URL returns HTTP 405. Opening the URL in a browser is not a connection test.

## Access and troubleshooting

- **HTTP 401:** check the key or session token, its expiry and revocation state, and the workspace origin.

- **HTTP 403:** check the workspace AI setting and the permissions needed by the requested read. Seeing a tool name does not grant access to its data.

- **A tool reports an error:** check the returned reason, fund and period IDs, and the endpoint parameters. Do not turn a failed or truncated read into a financial answer.

These tools read data and compute saved results. They cannot create journals, post allocations or change fund terms. Revoking or rotating the key ends its use under the workspace's normal key policy. Choose an assistant approved by your organization for the data you intend to read.

[Request a demo or sandbox](https://1494labs.com/#contact) to try this on reference funds. See the [capability matrix](https://1494labs.com/capabilities/) for current product scope.
