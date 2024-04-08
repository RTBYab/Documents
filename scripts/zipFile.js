const {execSync} = require('child_process');
const archiver = require('archiver');
const readline = require('readline');
const fs = require('fs');

const isLinux = process.platform === 'linux';
const rootPath = `${__dirname}/../`;
const publishPathDir = `${rootPath}publish`;
const productionRootFolderPath = `${__dirname}/..${isLinux
  ? ''
  : '..'}/production`;

if (!fs.existsSync(publishPathDir)) {
  fs.mkdirSync(publishPathDir);
}

function zipFiles(outputPath, envType, done) {
  execSync(`npm run setup:project -- --type=${envType}`);

  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip', {zlib: {level: 9}});

  output.on('close', () => {
    console.log(archive.pointer() + ' total bytes');
    console.log(
      'Archiver has been finalized and the output file descriptor has closed.');
  });

  archive.on('warning', (err) => {
    if (err.code !== 'ENOENT') {
      throw err;
    }

    console.warn(err);
  });

  archive.on('error', err => {
    throw err;
  });

  archive.directory(productionRootFolderPath, false);

  archive.pipe(output);
  archive.finalize().then(() => done());
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  '\n\nBuild project for: \n\n  1. liara \n  2. custom server \n\nChoose: default [1]:',
  async envType => {

    if (fs.existsSync(publishPathDir + '/vidprotect.zip')) {
      fs.rmSync(publishPathDir + '/vidprotect', {force: true, recursive: true});
      fs.unlinkSync(`${publishPathDir}/vidprotect.zip`);
    }

    envType = envType !== '2' ? 'dev' : 'production';

    zipFiles(`${publishPathDir}/vidprotect.zip`, envType, async () => {
      fs.rmSync(productionRootFolderPath, {force: true, recursive: true});

      console.log('\nSuccessfully Finished');
      rl.close();
    });

  });