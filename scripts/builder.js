const utils = require('./utils');
const path = require('path');
const fs = require('fs');

const isLinux = process.platform === 'linux';
const rootPath = `${__dirname}/../`;
const productionPath = `${rootPath}production/`;
const productionAppPath = `${productionPath}app`;

makeSrc();

function makeSrc() {
  if (fs.existsSync(productionPath)) {
    utils.deleteFolderRecursive(productionPath);
  }

  const ignoreFilePath = `${rootPath}.vidignore`;

  const ignoreList = fs
    .readFileSync(ignoreFilePath)
    .toString()
    .split(isLinux ? '\n' : '\r\n');

  fs.mkdirSync(productionAppPath, { recursive: true });

  const files = fs.readdirSync(rootPath);

  for (const file of files) {
    const fullPath = path.join(rootPath, file);
    const targetPath = path.join(productionAppPath, file);

    if (ignoreList.includes(file)) {
      continue;
    }

    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);

      if (stats.isFile()) {
        fs.copyFileSync(fullPath, targetPath);
      }

      if (stats.isDirectory()) {
        utils.copyRecursiveSync(fullPath, targetPath);
      }
    }
  }
}
