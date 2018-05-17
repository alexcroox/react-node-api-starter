const axios = require('axios')
const objectGet = require('object-get')

class weatherApi {
  constructor() {
    this.request = axios.create({
      baseURL: 'http://samples.openweathermap.org/data/2.5/',
      timeout: 10000,
      headers: {
        'Accept': 'application/json'
      }
    })
  }

  fetchWeather (query) {
    return new Promise((resolve, reject) => {
      this.request.get(`/weather/q=${query}&APPID=${process.env.WEATHER_API_KEY}`)
        .then(response => {
          let temp = objectGet(response, 'main.temp')

          if (temp)
            resolve(temp)
          else
            throw "No temp for that location"
        })
        .catch(error => {
          console.log('Error', error)
          let errorText = objectGet(error, 'response.statusText') || error
          reject(errorText)
        })
    })
  }
}

module.exports = new weatherApi()
