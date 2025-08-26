import jwt from 'jsonwebtoken'

export const isLogged = (req, res, next) => {

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.json({ error: "No token access denied" })
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.json("You are not logged in");
  }
  try {
    const verified = jwt.verify(token, "secret");
    if (!verified) {
     return res.json("Invalid token");
    }
    req.user = verified;
    next()
  } catch (error) {
    console.log(error.message);
  }
};


export const checkAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.json({ message: "Admins only" });
  }
  next();
};
export const checkStaff = (req, res, next) => {
  if (req.user?.role !== 'staff') {
    return res.json({ message: "Admins only" });
  }
  next();
};