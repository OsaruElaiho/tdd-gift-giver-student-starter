const express = require('express')
const morgan = require('morgan')
const giftRouter = require('./routes/gift-exchange')
const { NotFoundError } = require('./utils/errors')
const app = express()

app.use(morgan("tiny"))
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({ping: "pong"})
  })  

app.use("/gift-exchange", (giftRouter));

app.use((req, res, next) => {
    return next( new NotFoundError())
  })


app.use((error, req, res, next) => {
    const status = error.status || 400
    const message = error.message || "Something went wrong in the application"
    return res.status(status).json({error: {message, status},})
  })

module.exports = app