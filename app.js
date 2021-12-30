const port = process.env.PORT || 12345
const path = require('path').resolve()
const express = require('express')
const app = express()
const cors = require('cors')
const laftel = require('laftel.js')

// app.use('/src', express.static(path + '/src'))
app.use(cors())

app.get('/', (_, res) => {
    res.send('Hello World!!')
})

app.get('/api/:title', function (req, res) {

    let _title = req.params.title
    console.log('검색어: ' + _title)
    
    laftel.search(_title).then(result => {
        // anime = result.results

        // laftel.getItem(anime.id).then(result => {
        //     console.log(result)
        // })
        // console.log(result.results)

        res.json(result)
    })

})

app.listen(port, () => { console.log(`http://localhost:${port}`) })