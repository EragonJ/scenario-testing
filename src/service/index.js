import {
  SCENARIO_KEY_IN_LOCALSTORAGE,
  SERVER_URL
} from '../constant'

export default {
  _getHeaders() {
    const headers = {}
    headers[SCENARIO_KEY_IN_LOCALSTORAGE] = localStorage.getItem(SCENARIO_KEY_IN_LOCALSTORAGE)
    return headers
  },

  _onError(methodName, e) {
    console.error(`We found an error here in ${methodName})`)
    console.error(e)
  },

  getUsers() {
    return fetch(`${SERVER_URL}/users`, {
      headers: this._getHeaders()
    }).then((result) => {
      return result.json();
    }).catch(this._onError.bind(this, 'getUsers'))
  },

  getTeams() {
    return fetch(`${SERVER_URL}/teams`, {
      headers: this._getHeaders()
    }).then((result) => {
      return result.json()
    }).catch(this._onError.bind(this, 'getTeams'))
  }
}