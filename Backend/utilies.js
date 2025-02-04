const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401); // No token provided

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = decoded; // Assign decoded payload directly
    next();
  });
};


module.exports = authenticateToken;