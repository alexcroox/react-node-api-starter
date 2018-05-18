const config = {
  apiBaseUrl: window.location.hostname.indexOf('d2wpfdzxndct17.cloudfront.net') > -1
    ? 'https://am6lnan3wb.execute-api.eu-west-1.amazonaws.com/dev/'
    : 'http://localhost:3001',
  apiRequestTimeout: 15000,
}

export default config
