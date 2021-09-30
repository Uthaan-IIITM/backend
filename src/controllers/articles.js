const fetch = require('node-fetch')

exports.getArticles = async(req, res) => {

    console.log("Requesting coming...")
    try {
        await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${process.env.UTHAAN_ARTICLES_URL}`)
            .then(res => res.json())
            .then(response => {
                // console.log(response)
                // console.log(response.items)
                const articles = response.items.map(article => ({
                    'title': article.title,
                    'date': article.pubDate,
                    'url': article.link,
                    'author': article.author,
                    'thumbnail': article.thumbnail,
                    'description': article.description
                }))
                res.send({ status: 200, data: articles })
            })

    } catch (err) {
        // console.log(err)
        res.send({ status: 500, message: err.message })
    }
}