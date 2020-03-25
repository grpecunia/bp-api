const express = require("express");
const app = express();
const mongoose = require("mongoose");
const orgsRoute = require("./routes/organizations");
let Lead = require("./models/Leads");
const bodyParser = require("body-parser");
let path = require("path");

require("dotenv/config");

app.use(bodyParser.json());

// Main Route for API
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Route to POST new Lead
app.post("/lead", (req, res) => {
  let lead = new Lead({
    name: req.body.name,
    email: req.body.email
  });
  lead
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

app.use("/orgs", orgsRoute);

//Connect to the DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to the Gucci-Mongo!!")
);

// Listening on PORT 2000
app.listen(process.env.PORT || 2000, () =>
  console.log("Local app listening on port 2000!")
);
