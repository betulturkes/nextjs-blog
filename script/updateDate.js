var fs= require('fs');

const path = `components/Layout.js`;
const readFile = fs.readFileSync(path, 'utf8');
let newFileContent  = readFile.replace("#Tarih#", new Date().getTime());
console.log(newFileContent);

fs.writeFile(path,readFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
});