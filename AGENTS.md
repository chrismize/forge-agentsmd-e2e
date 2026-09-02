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
<!-- END:testing-rules -->

Manual prose BELOW the blocks, with trailing spaces that must survive:   
- keep me exactly

<!-- BEGIN:learned-scripts-directory -->
# Scripts directory structure

The repository has a `scripts/` directory for utility scripts. New scripts should be placed here and documented in the README.md under a Scripts section.
<!-- END:learned-scripts-directory -->
<!-- BEGIN:learned-testing-approach -->
# Testing new scripts in place

New scripts can be tested by running them directly with Node.js (e.g., `node scripts/backup.js`). The agent tested the backup script both with and without arguments, and verified output files were created, then cleaned up test artifacts.
<!-- END:learned-testing-approach -->
