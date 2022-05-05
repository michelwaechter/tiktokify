const fetch = require("node-fetch");
const headers = require("./headers.helper");

const fetchData = async (url) => {
  const response = await fetch(url, {
    headers: headers.headers,
  });
  const data = await response.json();
  return await data;
};

module.exports = { fetchData };
