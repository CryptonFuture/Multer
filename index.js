const multer = require('multer')
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const upload = multer({dest: 'uploads/'}).single("demo_image")


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

app.listen(port, () => {
    console.log(`Server is localhost on Port ${port}`)
})