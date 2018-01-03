const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').JwtStrategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')
