let myPages = ["Home", "Secret", "Notes"];
let jsonData =JSON.stringify(myPages);

var fs = require('fs');
fs.writeFile("pages.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});

fs.readFile('pages.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    myPages = JSON.parse(data);
  })
  