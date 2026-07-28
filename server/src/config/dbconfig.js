const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jssi7ls.mongodb.net/${process.env.DB_USERNAME}?appName=Cluster0`,
    )
    .then(() => {
      console.log(`database connection successfull`);
    })
    .catch((err) => {
      console.log(err.message || "database disconnected");
    });
};

module.exports = dbConnection;
