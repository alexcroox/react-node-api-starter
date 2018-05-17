// Example db class
const mysql = require('mysql')

class db {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      typeCast: function castField(field, useDefaultTypeCasting) {

        // We only want to cast bit fields that have a single-bit in them. If the field
        // has more than one bit, then we cannot assume it is supposed to be a Boolean.
        if ((field.type === "BIT") && (field.length === 1)) {

          var bytes = field.buffer();

          // A Buffer in Node represents a collection of 8-bit unsigned integers.
          // Therefore, our single "bit field" comes back as the bits '0000 0001',
          // which is equivalent to the number 1.
          return (bytes[0] === 1);

        }

        return (useDefaultTypeCasting());

      }
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((error, connection) => {
        if (error) {
          console.error('Error connecting to mysql', error.stack)
          return reject('Error connecting to mysql')
        }

        resolve(connection)
      })
    })
  }

  escape(value) {
    return mysql.escape(value)
  }

  disconnect() {
    this.connection.end()
  }
}

module.exports = new db()
