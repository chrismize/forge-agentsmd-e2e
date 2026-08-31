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

<!-- BEGIN:learned-repository-structure -->
# Repository uses AGENTS.md for automation rules

This repository follows a pattern where `AGENTS.md` contains agent-specific rules and guidelines for automated tooling, while `README.md` serves as the main repository documentation. When modifying documentation, respect this separation of concerns.
<!-- END:learned-repository-structure -->
