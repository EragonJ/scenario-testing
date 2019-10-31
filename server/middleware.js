const {
  SCENARIO_KEY_IN_LOCALSTORAGE
} = require('../src/constant')

module.exports = function(req, res, next) {
  const scenarioType = req.headers[SCENARIO_KEY_IN_LOCALSTORAGE] || 'DEFAULT'

  next()
}
