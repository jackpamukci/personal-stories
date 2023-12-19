const express = require('express')
const request = require('request')

const Parser  = require('rss-parser')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/api/medium', async (req, res) => {
    // request(
    //   { url: 'https://medium.com/feed/@readingthepitch' },
    //   (error, response, body) => {
    //     if (error || response.statusCode !== 200) {
    //       return res.status(500).json({ type: 'error', message:
    //     err.message })
    //   }
      
    //   res.set('Content-Type', 'application/rss+xml')
    //   res.send(Buffer.from(body))
    // })
    const parser = new Parser()

    const feed = await parser.parseURL('https://medium.com/feed/@readingthepitch')

    let items = []

    await Promise.all(feed.items.map(async (currentItem) => {
        if (items.filter((item) => item === currentItem).length <= 1) {
            items.push({
                "title": currentItem.title,
                "link": currentItem.link,
                "pubdate": currentItem.pubDate,
                // "image":currentItem.image.url,
                "content":currentItem['content:encoded']
            })
        }
    }));

    res.send(items)
    // console.log(items);

  })
  
const PORT = process.env.PORT || 4050
app.listen(PORT, () => console.log(`listening on ${PORT}`))

module.exports = app;
