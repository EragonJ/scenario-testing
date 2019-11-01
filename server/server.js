const path = require('path')

const {
  SCENARIO_KEY_IN_LOCALSTORAGE
} = require(path.join(__dirname, '..', 'src', 'constant'))

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

router.render = (req, res) => {
  const {
    url 
  } = req
  const scenarioType = req.headers[SCENARIO_KEY_IN_LOCALSTORAGE] || 'DEFAULT'
  let result = res.locals.data

  switch (scenarioType) {
    case 'DEFAULT':
      break;

    case 'NO_USER_WITH_NO_TEAM':
      result = []
      break;

    case 'SEVEN_USERS_WITH_NO_TEAM':
      if (url === '/teams') {
        result = []
      }
      break;

    case 'NO_USERS_WITH_THREE_TEAMS':
      if (url === '/users') {
        result = []
      }
      break;

    case 'SEVEN_USERS_WITH_THREE_TEAMS':
      break;

    default:
      break;
  }

  res.jsonp(result)
}

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})