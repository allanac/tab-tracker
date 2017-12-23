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
      let songs = null
      const search = req.query.search
      if(search){
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key =>({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
       res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
  },
  

}
