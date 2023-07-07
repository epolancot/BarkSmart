const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const ProfileRouter = require('./routes/ProfileRouter')
const RequestRouter = require('./routes/RequestRouter')
const DogRouter = require('./routes/DogRouter')
const MessageRouter = require('./routes/MessageRouter')


const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/dog', DogRouter)
app.use('/profiles', ProfileRouter)
app.use('/requests', RequestRouter)
app.use('/messages', MessageRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
