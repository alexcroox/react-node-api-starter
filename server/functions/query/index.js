const responses = require('../../lib/responses')
const weatherApi = require('../../lib/weather-api')

const apiFunction = (request, response) => {

  let query = request.params.query

  if (!query)
    return responses.error(response, 'The query paramater is missing', 400)

  console.log('Query: ', query)

  weatherApi.fetchWeather(query)
    .then(results => responses.success(response, results))
    .catch(error => responses.error(response, error))
}

module.exports = apiFunction
