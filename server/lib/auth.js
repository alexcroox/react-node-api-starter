// Example of authentication middleware
const authRequest = (request, response, next) => {
  if (request.token === process.env.ACCESS_TOKEN)
    next()
  else
    response.status(401).json({ error: "Invalid auth token" })
}

module.exports = authRequest
