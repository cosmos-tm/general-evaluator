const fs = require('fs');

let backend = [];

fs.readdir('../backend/', (err, files) => {
    files.forEach(file => {
      console.log(file);

      let fileContent = fs.readFileSync('../backend/' + file, 'utf-8');
    //   console.log(fileContent);
      backend.push(fileContent);
      console.log(backend);
      console.log('');
})});
