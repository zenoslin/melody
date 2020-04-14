const fs = require('fs');
const path = require('path');
const componentDir = './packages';
const cModulueNames = fs.readdirSync(path.resolve(componentDir));
const cModulueMap = cModulueNames.reduce((prev, name) => {
    if (name === 'style') {
        return prev;
    }
    prev[name.split('.')[0]] = {
        input:
            name.indexOf('index') > -1
                ? `${componentDir}/${name}`
                : `${componentDir}/${name}/index.js`,
        output: name.split('.')[0],
    };
    return prev;
}, {});


module.exports = cModulueMap;
