const fs = require('fs');

const directory = __dirname + '/locales';
const localesFiles = fs.readdirSync(directory);
const locales = localesFiles.map(fileName => fileName.split('.')[0]);
const enUs = JSON.parse(fs.readFileSync(`${directory}/en_us.json`));

const metaData = localesFiles.map(fileName => {
  const { id, title, lang } = JSON.parse(
    fs.readFileSync(`${directory}/${fileName}`, { encoding: 'utf-8' })
  );
  return { id, title, lang };
});

module.exports = { directory, locales, metaData };
