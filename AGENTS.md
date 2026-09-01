# Agent rules for forge-agentsmd-e2e

Manual prose ABOVE the blocks. A human wrote this line and it must never move.   

<!-- BEGIN:logging-rules -->
# Structured Logging Only

Use the structured logger in `src/logger.js`; never call `console.log` directly.
<!-- END:logging-rules -->

Manual note BETWEEN the blocks. This paragraph is hand-maintained.


It even has a deliberate double blank line above it that must be preserved.

<!-- BEGIN:testing-rules -->
# Testing

Run `npm test` before committing.
- Run the smoke suite before opening a pull request.  
- Record flaky tests in the tracker.  

<!-- END:testing-rules -->

Manual prose BELOW the blocks, with trailing spaces that must survive:   
- keep me exactly

<!-- BEGIN:learned-markdown-formatting -->
# Markdown formatting with trailing spaces

Bullet points in AGENTS.md require two trailing spaces per line. This is a specific formatting convention for this repository's documentation.
<!-- END:learned-markdown-formatting -->
<!-- BEGIN:learned-marker-blocks -->
# Marker block structure in AGENTS.md

AGENTS.md uses HTML comment markers like `<!-- BEGIN:testing-rules -->` and `<!-- END:testing-rules -->` to delimit sections. A blank line must precede the END marker. Multiple marker blocks exist (testing-rules, logging-rules) and must be edited independently.
<!-- END:learned-marker-blocks -->
