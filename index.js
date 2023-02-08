const express = require('express')
const multer = require('multer')

const upload = multer({dest: 'uploads/'}).single("demo_image")

const app = express()

app.get('/', (req, res) => {
    res.send("Server is working")
})

app.post("/image", (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            res.status(400).send("Something went wrong")
        }
        res.send(req.file)
    })
})

app.listen(process.env.PORT, () => {
    console.log('Server is localhost on Port ' + process.env.PORT)
})