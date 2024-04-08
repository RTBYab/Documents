// Modules
const path = require('path');
const fs = require('fs');

// Exports
const utils = module.exports;

const isLinux = process.platform === 'linux';
const slash = isLinux ? '/' : '\\';
const dockerPath = `${isLinux ? '/' : slash}app${isLinux ? '/' : slash}docker`;

/**
 * @param {String} directoryPath
 * @return {void}
 */
utils.deleteFolderRecursive = function(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach(file => {

      const curPath = path.join(directoryPath, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        utils.deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }

    });

    fs.rmdirSync(directoryPath);
  }
};

/**
 * @return {String}
 */
utils.getEnvType = function() {
  return (process.argv.find(s => s.startsWith('--type=')) ??
    '--type=local').split('=').at(-1);
};

/**
 * @param {String} src
 * @param {String} dest
 * @return {void}
 */
utils.copyRecursiveSync = function(src, dest) {
  const dirName = src.split('/');
  const isDockerFolder = dirName.at(-1) === 'docker';
  const isDockerFile = dirName.at(-2) === 'docker';
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    fs.mkdirSync(
      isDockerFolder
        ? dest.replace(dockerPath, '')
        : dest,
      {recursive: true},
    );

    fs.readdirSync(src).forEach(function(childItemName) {
      utils.copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.copyFileSync(
      src,
      isDockerFolder || isDockerFile ||
      (utils.getEnvType() === 'dev' && dest.includes('liara.json'))
        ? dest.replace(dockerPath, '')
        : dest,
    );
  }

  if (dest.includes('Dockerfile') && utils.getEnvType() === 'dev') {
    utils.changeDockerfile(dest.replace(dockerPath, ''));
  }
};

/**
 * @param {String} fullPath
 * @return {void}
 */
utils.changeDockerfile = function(fullPath) {
  let data = fs.readFileSync(fullPath).toString();
  data = data.replace('WORKDIR /app', 'WORKDIR /');
  data = data.replace(/EXPOSE(\s+\d+)+/, 'EXPOSE 3000');
  data = data.replace(/CMD npm run serve -- --port(\s+\d+)+/,
    'CMD npm run serve -- --port 3000');
  fs.writeFileSync(fullPath, data);
};