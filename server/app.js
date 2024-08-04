const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes); // => /api/places...
app.use("/api/users", usersRoutes);

// If a request to a route not with /api/places or /api/users prefix - this is not supported
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://orisil:Ori180998@cluster0.1kdsmcb.mongodb.net/places?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(5001);
  })
  .catch((err) => {
    console.log(err);
  });
