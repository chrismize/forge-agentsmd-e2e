# forge-agentsmd-e2e
Scratch target repo for Aine Forge code-mode AGENTS.md marker refresh testing

## Scripts

### backup.js
Archives a directory using tar. Takes a directory path as its first command line argument.

Usage:
```bash
node scripts/backup.js <directory-path>
```

Example:
```bash
node scripts/backup.js /path/to/directory
```

This will create a timestamped tar.gz archive of the specified directory.
