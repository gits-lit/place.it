let apiurl = 'https://a1cc45d7.ngrok.io';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiurl = 'https://a1cc45d7.ngrok.io';
}

export default {
  API_URL: apiurl,
  USE_APIS: 0
}
