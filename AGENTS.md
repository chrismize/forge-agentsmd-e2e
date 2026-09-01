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

<!-- BEGIN:learned-protected-files -->
# AGENTS.md must not be modified

The repository has a file called AGENTS.md that must be explicitly avoided during changes. Tasks may specifically call out not to touch this file along with other restrictions.
<!-- END:learned-protected-files -->
<!-- BEGIN:learned-branch-workflow -->
# Branch naming and PR workflow

Changes are made on branches with the pattern `forge/code-<uuid>` created from master. Work is submitted via pull request back to the master branch.
<!-- END:learned-branch-workflow -->
