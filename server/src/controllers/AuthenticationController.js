const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
  })
}

module.exports = {
  // Async method to create user
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJson()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)})
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  // Async method to login User
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      // No user in DB
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      // invalid password
      const isPasswordValid = await password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      // return user if everything is good
      const userJson = user.toJson()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
       res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
  }

}
