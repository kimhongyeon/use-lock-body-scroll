const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const indexFile = path.join(distDir, 'index.js');

if (fs.existsSync(indexFile)) {
  fs.renameSync(indexFile, path.join(distDir, 'index.esm.js'));
}
