const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  })
  .catch((err) => {
    console.log(mongoose.version);
    console.log(err);
  });

module.exports.Place = require("./places");
