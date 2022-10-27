import db from '../config/database.js'

// Get All Users
export const getUsers = (result) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const insertUser = (data, result) => {
  db.query('INSERT INTO users SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const verifyUser = (data, result) => {
  const sql_stmt = 'SELECT * FROM users WHERE username = ? AND password = ?'
  db.query(sql_stmt, [data.username, data.password], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
