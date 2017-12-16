const {Song} = require('../models')


function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
  })
}

module.exports = {
  async index (req, res) {
    try {
      
    } catch (err) {
       res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
  }

}
