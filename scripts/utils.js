// Modules
const path = require('path');
const fs = require('fs');

// Exports
const utils = module.exports;

const isUnixOrLinux = process.platform !== 'win32';
const slash = isUnixOrLinux ? '/' : '\\';
const dockerPath = env => `${slash}app${slash}docker${slash}${env}`;

/**
 * @param {String} directoryPath
 * @return {void}
 */
utils.deleteFolderRecursive = function (directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach(file => {
      const curPath = path.join(directoryPath, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        utils.deleteFolderRecursive(curPath);
        return;
      }

      fs.unlinkSync(curPath);
    });

    fs.rmdirSync(directoryPath);
  }
};

/**
 * @return {String}
 */
utils.getEnvType = function () {
  const env = (
    process.argv.find(_ => _.startsWith('--type=')) ?? '--type=local'
  )
    .split('=')
    .at(-1)
    .split(' ')
    .at(0);

  return ['dev', 'local', 'production'].includes(env) ? env : '';
};
/**
 * @param {String} src
 * @param {String} dest
 * @return {void}
 */
utils.copyRecursiveSync = function (src, dest) {
  const dockerBasePath = `${slash}docker${slash}`;
  const isDockerRootFolder = src.includes(dockerBasePath);
  const isDockerFolder = src.includes(dockerBasePath + utils.getEnvType());
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (isDockerRootFolder && !isDockerFolder) {
      return;
    }

    if (isDockerFolder) {
      for (const filename of fs.readdirSync(src)) {
        fs.cpSync(
          src + slash + filename,
          dest.replace(dockerPath(utils.getEnvType()), slash) + filename,
        );
      }
      return;
    }

    if (!src.includes(`${slash}docker`)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    fs.readdirSync(src).forEach(function (childItemName) {
      utils.copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
    return;
  }

  fs.copyFileSync(src, dest);
};
