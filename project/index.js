const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const fs = require('fs');
const {setInterval} = require('timers');
const axios = require('axios');
const path = require('path');

const imgdir = path.resolve(__dirname, '/usr/src/app/files/', 'image.jpg')
const dir = path.resolve(__dirname, '/usr/src/app/files/', 'date.json')

async function download() {
    const url = 'https://picsum.photos/200'
    axios({url: url, responseType: 'stream', method: 'GET' }).then(res => {
    res.data.pipe(fs.createWriteStream(imgdir));
    
    res.data.on("end", () => {
      console.log("download complete");
    })
  })
    
    console.log('New image will be displayed')
}

async function datecomp(time) {
  if (fs.existsSync(dir) && fs.existsSync(imgdir)) {
    var jsondata = fs.readFileSync(dir)
    diff = (Date.now() - JSON.parse(jsondata)) / 1000
    if (diff >= 600) {
      fs.writeFile(dir, JSON.stringify(Date.now()), function(err) {
        if (err) {
          console.log(err)
        }
        console.log('time found and new written')
        download()
      })
    }
  } else {
    var jsondata = JSON.stringify(time)
    fs.writeFile(dir, jsondata, function(err) {
      if (err) {
        console.log(err)
      }
      download()
      console.log('time written')
    })
  }
    
}

datecomp(Date.now())

setInterval(() => {
    datecomp(Date.now())
}, 30000)

app.use(express.static('../'))

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    var todos = ['Learn JavaScript', 'Learn React', 'Build a project'];
    res.render(__dirname + '/templates/index.html', {todos:todos});

})

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
})