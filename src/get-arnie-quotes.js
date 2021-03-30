const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  let results = [];
  let i = 0;
  while (i < urls.length) {
    let response = await httpGet(urls[i]);
    if (response.status === 200) {
      result = { 'Arnie Quote': JSON.parse(response.body).message };
    } else {
      result = { 'FAILURE': JSON.parse(response.body).message };
    }
    results.push(result);
     i++;
  }
  return results;
};

module.exports = {
  getArnieQuotes,
};
