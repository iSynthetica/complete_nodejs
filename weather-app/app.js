const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// console.log(process.argv)

if (process.argv.length < 3) {
    console.log('Error: Location required')
} else {
    geocode(process.argv[2], (err, data) => {
        if (err) return console.log(err)

        forecast(data.latitude, data.longitude, (forecastErr, forecastData) => {
            if (forecastErr) return console.log(forecastErr)

            console.log('Location:', data.place_name)
            console.log('Temperature:', forecastData.temperature)
            console.log('Feels like:', forecastData.feelslike)
        })
    })
}