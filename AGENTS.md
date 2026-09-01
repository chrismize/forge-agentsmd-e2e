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

<!-- BEGIN:learned-marker-block-formatting -->
# Marker block formatting conventions in AGENTS.md

Marker blocks in AGENTS.md use HTML comments like `<!-- BEGIN:block-name -->` and `<!-- END:block-name -->`. Content lines within these blocks require two trailing spaces per line. A blank line must precede the END marker.
<!-- END:learned-marker-block-formatting -->
<!-- BEGIN:learned-selective-file-modification -->
# Multiple marker blocks require careful isolation

AGENTS.md contains multiple marker blocks (testing-rules, logging-rules). When modifying one block, verify through git diff that other blocks remain untouched to avoid unintended changes.
<!-- END:learned-selective-file-modification -->
