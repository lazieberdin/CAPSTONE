// Import function from User Model
import { getUsers, insertUser, verifyUser } from '../model/User.js'

// Get All Users
export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

//Insert User
export const createUser = (req, res) => {
  const data = {
    username: username,
    password: 12345678,
    member_id: member_id,
  }
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const userLogin = (req, res) => {
  const data = {
    username: req.body.userName,
    password: req.body.password,
  }

  verifyUser(data, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
}
