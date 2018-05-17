const config = {
  apiBaseUrl: window.location.hostname.indexOf('livedomain.com') > -1
    ? 'https://api.livedomain.com'
    : 'http://localhost:3001',
  apiRequestTimeout: 15000,
}

export default config
