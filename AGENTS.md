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
# Repository has a README.md at root

The repository contains a README.md file at the root level that can be modified directly. Changes to documentation follow standard Markdown formatting.
<!-- END:learned-repository-structure -->
<!-- BEGIN:learned-git-workflow -->
# Standard branch and PR workflow

Work is done on feature branches named `forge/code-{uuid}` branched from `master`. Changes are committed and submitted via pull requests using the sandbox PR mechanism.
<!-- END:learned-git-workflow -->
