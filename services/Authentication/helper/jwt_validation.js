import Jwt from "jsonwebtoken";
import 'dotenv/config';

let secret_key = process.env.SECRET_KEY;

const validateToken = (req, res, next) => {
  // Retrieve the token from the request headers, query string, or cookies
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify and decode the token
  Jwt.verify(token, secret_key, (err, decodedToken) => {
    if (err) {
      return res.status(404).json({ message: err });
    }
    if (decodedToken.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    // Attach the decoded token to the request object for further use
    req.user = decodedToken;
    next();
  });
};

export default validateToken;
