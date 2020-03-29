let apiurl = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiurl = 'http://localhost:3000';
}

export default {
  API_URL: apiurl,
  USE_APIS: 0
}
