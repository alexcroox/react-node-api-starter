import axios from 'axios'
import config from '../config/application'

class Api {
  constructor () {
    this.request = axios.create({
        baseURL: config.apiBaseUrl,
        timeout: config.apiRequestTimeout,
        headers: {'Accept': 'application/json'}
    });
  }

  setAuth (key) {
    let value = key ? `Bearer ${key}` : ''
    this.request.defaults.headers.common['Authorization'] = value
  }
}

export default new Api()
