'use strict'

// Dependencies
const router = require('express').Router()
const jwtDecode = require('jwt-decode')

// Require CleverCore
const CleverCore = require('clever-core')

// Load the config from the core
const config = CleverCore.loadConfig()

// check if jwt-cookie exists
function isLogged(req, res, next) {
  // NB: we don't need a high security check
  // since this module don't handle any data.
  // The check is done in the API that is exchange via the React components.
  const jwt = req.cookies[config.auth.jwt.cookie]
  if (!jwt) return res.redirect('/auth')

  // Decode jwt
  res.locals.user = jwtDecode(jwt)
  next()
}

// Exports
module.exports = function(PagesAdminPackage, app, config) {

  // Mock
  router.get('/data', (req, res, next) => {
    res.json([
      {status: 'Published', name: 'Homepage'},
      {status: 'Published', name: 'Page 2'},
      {status: 'Unpublished', name: 'Page 3'},
      {status: 'Published', name: 'Page 4'},
      {status: 'Published', name: 'Page 5'},
      {status: 'Maybe', name: 'Homepage 2'}
    ])
  })

  router.get('/', isLogged, (req, res, next) => {
    // TODO: Change clever-core for auto passing res.locals to render
    res.send(PagesAdminPackage.render('pages', res.locals))
  })

  return router

}
