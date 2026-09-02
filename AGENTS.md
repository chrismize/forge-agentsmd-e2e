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

<!-- BEGIN:learned-security-command-execution -->
# Use execFile for shell commands with user input

When executing shell commands with user-provided arguments, use `child_process.execFile()` with an array of arguments instead of `exec()` with string interpolation. This prevents command injection vulnerabilities. The backup script was corrected from using `exec()` with template literals to `execFile()` with argument arrays.
<!-- END:learned-security-command-execution -->
<!-- BEGIN:learned-path-validation -->
# Validate file system paths before operations

Scripts that operate on file system paths should validate them before use: check existence with `fs.existsSync()`, verify type with `fs.statSync().isDirectory()`, and confirm permissions with `fs.accessSync()` using appropriate constants like `fs.constants.R_OK`. The backup script required all three checks.
<!-- END:learned-path-validation -->
