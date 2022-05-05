const user = require("./helpers/user.helpers");
const headers = require("./helpers/headers.helper");
const response = require("./helpers/response.helper");

const fetch = require("node-fetch");

const getDataByUserName = async (identifier, request = "data") => {
  let validate = user.validateUserName(identifier);
  let url = `https://www.tiktok.com/node/share/user/@${validate}`;
  const data = await response.fetchData(url);

  if (request === "id") {
      return data?.userInfo.user.id;
    }
    return data;
};
exports.getDataByUserName = getDataByUserName;

const getIDByUserName = async (identifier) => { return await getDataByUserName(identifier, "id"); };
exports.getIDByUserName = getIDByUserName;
