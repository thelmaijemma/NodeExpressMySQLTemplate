const express= require('express')
const app = express()

// ALT CODE
//const apiRouter = require('./routes/noLongerIndex')
// you don't have to put index because it is defaulted
// this could also be called app.js
// app.use('/api/tweets', apiRouter)


app.use(express.json())
require('dotenv').config()
const userRouter = require("./api/users/user.router")
app.use("/api/users", userRouter)



/// this (below) can be here or in routes/index.js
// see the commented out "no longer Routes"

app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "This is rest APIs working"
    })
})

app.use(express.json())





app.listen(process.env.APP_PORT || '3000', () => {
    console.log(`Server is running on port ${process.env.PORT || '3000'}`)
// woeks for a launch to heroku for example
})