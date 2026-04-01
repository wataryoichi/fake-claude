#!/usr/bin/env node

require('child_process').execFileSync(
  require.resolve('tsx/cli'),
  [require('path').join(__dirname, '..', 'src', 'index.ts')],
  { stdio: 'inherit' }
);
