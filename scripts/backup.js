#!/usr/bin/env node

const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the directory path from command line arguments
const dirPath = process.argv[2];

if (!dirPath) {
  console.error('Error: Please provide a directory path as the first argument');
  console.error('Usage: node scripts/backup.js <directory-path>');
  process.exit(1);
}

// Resolve the absolute path
const absolutePath = path.resolve(dirPath);

// Validate that the path exists
if (!fs.existsSync(absolutePath)) {
  console.error(`Error: Path does not exist: ${absolutePath}`);
  process.exit(1);
}

// Validate that the path is a directory
let stats;
try {
  stats = fs.statSync(absolutePath);
} catch (error) {
  console.error(`Error: Cannot access path: ${error.message}`);
  process.exit(1);
}

if (!stats.isDirectory()) {
  console.error(`Error: Path is not a directory: ${absolutePath}`);
  process.exit(1);
}

// Check if the directory is readable
try {
  fs.accessSync(absolutePath, fs.constants.R_OK);
} catch (error) {
  console.error(`Error: Directory is not readable: ${absolutePath}`);
  process.exit(1);
}

const dirName = path.basename(absolutePath);
const parentDir = path.dirname(absolutePath);
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const archiveName = `${dirName}-backup-${timestamp}.tar.gz`;

console.log(`Archiving directory: ${absolutePath}`);
console.log(`Creating archive: ${archiveName}`);
console.log(`Output location: ${path.resolve(archiveName)} (current working directory)`);

// Execute the tar command using execFile to prevent command injection
// execFile does not spawn a shell, so arguments are passed safely
execFile('tar', ['-czf', archiveName, '-C', parentDir, dirName], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error creating archive: ${error.message}`);
    process.exit(1);
  }
  
  if (stderr) {
    console.error(`Warning: ${stderr}`);
  }
  
  if (stdout) {
    console.log(stdout);
  }
  
  console.log(`Successfully created archive: ${archiveName}`);
});
