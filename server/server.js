const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hallo Welt')
})

app.listen(5000, () => {
    console.log('Server auf Port 5000 gestartet')
})
