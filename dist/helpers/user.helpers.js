const validateUserName = (userName) => {
  if (userName.length < 0) {
    throw new console.warn("User name is required");
  }
  // check username starts with @
  if (userName[0] == "@") {
    console.warn("User name should not start with @");
    // remove @ from user name
    return userName.substring(1);
  }
  return userName;
};


module.exports = {
    validateUserName,
};
