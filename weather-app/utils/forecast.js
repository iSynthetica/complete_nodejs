const request = require('postman-request')

const forecast = (lat, lon, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=1daa3ca58b0a99bd80afba29f3bff17f&query='+lat+','+lon+'&units=m'
    
    request({url: url, json: true}, (error, response, body) => {
        if (error) {
            cb(error)
        } else if (body.error) {
            cb(body.error)
        } else {
            // console.log(body)
            const data = body.current
            cb(undefined, {
                temperature: data.temperature,
                feelslike: data.feelslike
            })
        }
    });
}

module.exports = forecast