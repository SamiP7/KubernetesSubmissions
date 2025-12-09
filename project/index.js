const express = require('express')
const app = express()


const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Server is running!')
})

app.listen(port, () => {
    console.log(`Server started in port ${port}`)
})