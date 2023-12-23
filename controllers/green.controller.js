const { connectDb } = require("../database");

const getGreen = async (req, res) => {
  const db = await connectDb();
  const green = await db.collection("green").find().toArray();

  res.json(green);
};


module.exports = {
  getGreen,
};
