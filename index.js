require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000

const biodata = {
  "user": {
    "id": 101,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "age": 28,
    "location": {
      "city": "Chandigarh",
      "state": "Punjab",
      "country": "India"
    },
    "preferences": {
      "language": "English",
      "theme": "dark"
    }
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send("www.twitter.com/prashant")
})

app.get("/account", (req, res) => {
  res.send("Sending Account details...")
})
app.get("/youtube", (req, res) => {
  res.send('<a href="https://www.youtube.com/">Visit YouTube</a>')

})

app.get("/login", (req, res) => {
  res.send("<h1>Loading Login page...</h1>")
})


app.get("/biodata", (req, res)=>{
  res.json(biodata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
