const fetch = require('node-fetch')

exports.getInterviews = async(req, res) => {

    try {
        await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${process.env.UTHAAN_INTERVIEWS_URL}`)
            .then(res => res.json())
            .then(response => {
                const interviews = response.items.map(interview => ({
                    'title': interview.title,
                    'date': interview.pubDate,
                    'dateInSeconds': new Date(interview.pubDate).getTime(),
                    'url': interview.link,
                    'author': interview.author,
                    'thumbnail': interview.thumbnail,
                    'description': interview.description,
                    'tags': interview.categories,
                }))
                res.send({ status: 200, data: interviews })
            })

    } catch (err) {
        console.log(err)
        res.send({ status: 500, message: err.message })
    }
}