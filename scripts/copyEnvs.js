// NPM Modules
const fs = require('fs');

module.exports = function (specificService, _moveTo = `../production${specificService === '2' ? '/app' : ''}`) {
    const copyFrom = __dirname + `/${specificService === '2' ? 'production' : 'dev'}ProjectEnvs`;
    const isLinux = process.platform === 'linux';
    const moveTo = __dirname + `/${isLinux ? '' : '../'}${_moveTo}`;

    const listOfFilesWhichWeWantToCopy = fs.readdirSync(copyFrom);

    for (const file of listOfFilesWhichWeWantToCopy)
        fs.copyFileSync(`${copyFrom}/${file}`, `${moveTo}/${file}`);

    console.log('Successfully Finished');
}