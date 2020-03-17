let fs = require('fs')

function PreadFile(url) {
  return new Promise((res, rej) => {
    fs.readFile(url, function (err, data) {
      if (err) {
        return rej(err)
      }
      res(data.toString())
    })
  })
}

PreadFile('./data/a.txt').then(data => {
  console.log(data);
  return PreadFile('./data/b.txt')
}).then(data => {
  console.log(data);
  return PreadFile('./data/c.txt')
}).then(data => {
  console.log(data);
})