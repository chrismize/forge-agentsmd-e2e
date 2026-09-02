#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

// Get the directory path from command line arguments
const dirPath = process.argv[2];

if (!dirPath) {
  console.error('Error: Please provide a directory path as the first argument');
  console.error('Usage: node scripts/backup.js <directory-path>');
  process.exit(1);
}

// Resolve the absolute path
const absolutePath = path.resolve(dirPath);
const dirName = path.basename(absolutePath);
const parentDir = path.dirname(absolutePath);
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const archiveName = `${dirName}-backup-${timestamp}.tar.gz`;

// Create the tar command
const tarCommand = `tar -czf ${archiveName} -C ${parentDir} ${dirName}`;

console.log(`Archiving directory: ${absolutePath}`);
console.log(`Creating archive: ${archiveName}`);

// Execute the tar command
exec(tarCommand, (error, stdout, stderr) => {
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
