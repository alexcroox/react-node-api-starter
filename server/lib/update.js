// Example for stored proceedures
const db = require('./db')
const responses = require('./responses')

const update = (storedProcedure, values) => {
  return new Promise((resolve, reject) => {

    values = values.join(",")

    db.connect()
      .then(connection => {
        let query = connection.query(`CALL ${storedProcedure}(${values})`, (error, results) => {
          connection.release()
          if (error) throw error

          return resolve()
        })

        //console.log(query.sql)
      })
      .catch(error => reject(error))
  })
}

module.exports = update
