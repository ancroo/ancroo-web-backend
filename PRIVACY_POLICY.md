# Privacy Policy — Ancroo Browser Extension

**Effective date:** 2026-10-02
**Extension name:** Ancroo Web Backend
**Developer:** Stefan Schmidbauer

## Summary

Ancroo does not collect, transmit, or sell any personal data. All user data stays in your browser or is sent only to services you explicitly configure.

## Data Storage

All data is stored locally in your browser using `chrome.storage.local`:

| Data              | Purpose                                           | Stored where           |
| ----------------- | ------------------------------------------------- | ---------------------- |
| Settings          | Extension configuration (backend URL, microphone) | `chrome.storage.local` |
| Hotkey bindings   | Keyboard shortcut assignments                     | `chrome.storage.local` |
| Execution history | Last 50 workflow results for quick access         | `chrome.storage.local` |
| Auth tokens       | OAuth2 session tokens                             | `chrome.storage.local` |

`chrome.storage.local` is sandboxed per extension — websites and other extensions cannot access it. The storage is not encrypted on disk; anyone with access to your browser profile can read it.

## Data Transmission

Ancroo only sends data to services **you** configure:

- Your input text, audio recordings, and file uploads are sent to the self-hosted Ancroo Backend URL you configured.

No data is sent to the extension developer, Ancroo servers, or any third party beyond your configured backend.

## Data Collection

Ancroo does **not** collect:

- Analytics or usage statistics
- Telemetry or crash reports
- Browsing history or page content (beyond what you explicitly select for a workflow)
- Personally identifiable information
- Advertising data

## Permissions

| Permission                         | Why it is needed                                                 |
| ---------------------------------- | ---------------------------------------------------------------- |
| `activeTab`                        | Access the current tab for context menus and side panel          |
| `sidePanel`                        | Display the workflow side panel UI                               |
| `storage`                          | Store settings, history, and hotkey bindings locally             |
| `scripting`                        | Inject content scripts for text selection and hotkey handling    |
| `clipboardRead` / `clipboardWrite` | Read/write clipboard when a workflow uses clipboard input/output |
| `contextMenus`                     | Add "Run with Ancroo" to the right-click menu                    |
| `identity`                         | OAuth2 PKCE authentication with self-hosted backend              |
| `downloads`                        | Download files produced by workflow output actions               |

Host permissions for localhost are declared in the manifest. Custom backend URLs are requested via `chrome.permissions.request()` only when needed.

## Data Retention

- All stored data persists until you uninstall the extension or clear it manually.
- Execution history is capped at 50 entries (oldest are removed automatically).
- Uninstalling the extension removes all stored data.

## Children

Ancroo is not directed at children under 13 and does not knowingly collect data from children.

## Changes

Changes to this policy will be reflected in this document with an updated effective date.

## Contact

For privacy questions, open an [issue](https://github.com/ancroo/ancroo-web-backend/issues) or contact the developer via [GitHub](https://github.com/Stefan-Schmidbauer).
