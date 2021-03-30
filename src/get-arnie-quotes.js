const { httpGet } = require('./mock-http-interface');
const getArnieQuotes = async (urls) => {
  const requests = urls.map((url) => {
    return httpGet(url) 
     .then((response) => {
      if (response.status === 200) {
        result = { 'Arnie Quote': JSON.parse(response.body).message };
      } else {
        result = { 'FAILURE': JSON.parse(response.body).message };
      }
      return result;
      })
  })
  return Promise.all(requests) 
}

module.exports = {
  getArnieQuotes,
};
