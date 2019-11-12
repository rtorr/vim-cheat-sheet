const fs = require('fs');
const deepmerge = require('deepmerge');
const directory = __dirname + '/locales';
const localesFiles = fs.readdirSync(directory);
const enUs = JSON.parse(fs.readFileSync(`${directory}/en_us.json`));

localesFiles.forEach(fileName => {
  const lang = JSON.parse(fs.readFileSync(`${directory}/${fileName}`, { encoding: 'utf-8' }));
  fs.writeFileSync(
    `${__dirname}/locales/${fileName}`,
    JSON.stringify(deepmerge(enUs, lang), null, 2)
  );
});
