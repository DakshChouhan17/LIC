export const loginAdmin = (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "lic123") {
    return res.json({ success: true, message: "Login successful" });
  }
  return res.status(401).json({ success: false, message: "Invalid credentials" });
};
