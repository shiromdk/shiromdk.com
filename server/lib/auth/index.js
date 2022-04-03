"use strict";
const CognitoExpress = require("../lib/cognito/CognitoExpress");
const cognitoExpress = new CognitoExpress({
  region: process.env.AWS_REGION,
  cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
  tokenUse: "access", //Possible Values: access | id
  tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
});

const validateAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    // Validate the token
    const token = req.headers.authorization.split(" ")[1];
    cognitoExpress.validate(token, function (err, response) {
      if (err) {
        // If there was an error, return a 401 Unauthorized along with the error
        res.status(401).send(err);
      } else {
        //Else API has been authenticated. Proceed.
        next();
      }
    });
  } else {
    // If there is no token, respond appropriately
    res.status(401).send("No token provided.");
  }
};

module.exports = validateAuth