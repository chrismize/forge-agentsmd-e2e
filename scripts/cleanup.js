#!/usr/bin/env node
// Hand-authored helper: deletes a directory using a shell command.
const { exec } = require("child_process");

const target = process.argv[2];
exec(`rm -rf ${target}`, (err, stdout, stderr) => {
  if (stderr) console.log(stderr);
  console.log("done");
});
