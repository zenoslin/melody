const fs = require('fs');
const path = require('path');
const componentDir = './packages';
const cModulueNames = fs.readdirSync(path.resolve(componentDir));

const cModulueMap = cModulueNames
    .filter(name => {
        const stats = fs.statSync(path.resolve(`${componentDir}/${name}`));
        let isHasIndex;
        try {
            fs.accessSync(path.resolve(`${componentDir}/${name}/index.js`), fs.constants.F_OK);
            isHasIndex = true;
        } catch (e) {
            isHasIndex = false;
        }
        return (stats.isDirectory() && isHasIndex) || name === 'index.js';
    })
    .reduce((prev, name) => {
        if (name === 'style') {
            return prev;
        }
        prev[name.split('.')[0]] = {
            input: name.indexOf('index') > -1 ? `${componentDir}/${name}` : `${componentDir}/${name}/index.js`,
            output: name.split('.')[0],
        };
        return prev;
    }, {});

module.exports = cModulueMap;
