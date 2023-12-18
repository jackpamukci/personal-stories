import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'

const express = require('express')
const request = require('request')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/medium', (req, res) => {
    request(
      { url: 'https://medium.com/feed/@readingthepitch' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message:
        err.message })
      }
      
      res.set('Content-Type', 'application/rss+xml')
      res.send(Buffer.from(body))
    })
  })
  
  const PORT = process.env.PORT || 4050
  app.listen(PORT, () => console.log(`listening on ${PORT}`))

export default app;