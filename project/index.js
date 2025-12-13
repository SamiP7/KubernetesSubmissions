const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const fs = require('fs');
const {setInterval} = require('timers');
const axios = require('axios');
const path = require('path');

async function download() {
    
    
    const dir = path.resolve(__dirname, './templates/', 'image.jpg')
    const url = 'https://picsum.photos/200'
    axios({url: url, responseType: 'stream', method: 'GET' }).then(res => {
    res.data.pipe(fs.createWriteStream(dir));
    
    res.data.on("end", () => {
      console.log("download complete");
    });
  });
    
    
    console.log('New image will be displayed')
}

download()

setInterval(() => {
    
    download()
}, 600000)

app.use(express.static('templates'));

app.get('/', (req, res) => {
    
    res.sendFile('/index.html');
})

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
})