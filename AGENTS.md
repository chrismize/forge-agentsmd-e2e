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
# Repository contains AGENTS.md documentation

This repository includes an `AGENTS.md` file that appears to be significant documentation. When creating deployment instructions, reference this file as it contains important information for users.
<!-- END:learned-repository-structure -->
<!-- BEGIN:learned-git-workflow -->
# Standard Git workflow with feature branches

The repository uses a standard Git workflow: create feature branches from `master`, make changes, commit, and open pull requests. Branch naming follows the pattern `forge/code-{uuid}`.
<!-- END:learned-git-workflow -->
