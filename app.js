const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./app/models')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useiFindAndModify: true
    })
    .then(() => {
        console.log(`database connected!`)
    })
    .catch((err) =>{
        console.log(`Database not connected!`, err)
        process.exit()
    })
app.get('/', (req, res) =>{
    res.json({
        message: "hellow world"
    })
})

require('./app/routes/post.routes')(app)

const PORT = 8000
app.listen(PORT, () =>{
    console.log(`server run ${PORT}`)
})