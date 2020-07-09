const request = require('postman-request')

const geocode = (address, cb) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3ludGhldGljYSIsImEiOiJja2J3OXl0aDYwOW1lMnptc2xhcjBzNHNsIn0.jTzi00e3NZQsdz9M_bBbzA'

    request({url: url, json: true}, (error, response, body) => {
        // console.log( body)
        if (error) {
            cb(error)
        } else if (body.features.length === 0) {
            cb('Try another search')
        } else {
            const data = body.features
            cb(undefined, {
                latitude: data[0].center[1],
                longitude: data[0].center[0],
                place_name: data[0].place_name
            })
        }
    })
}

module.exports = geocode