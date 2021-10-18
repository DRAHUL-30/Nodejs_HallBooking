require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongo = require("./Shared/Mongo");
const bookedRoute = require("./Routes/bookedRoom");

const PORT = process.env.PORT || 5000;
const app = express();

async () => {
  try {
    await mongo.connect();

    app.use(cors());
    app.use(express.json());

    app.use((req, res, next) => {
      console.log("Logging middleware");
      next();
    });

    app.post("/", (req, res) => {
      try {
        let data = await db.rooms.insertOne(req.body);
        res.send({ message: "Room is created successfully", data });
      } catch (err) {
        console.log(err);
      }
    }),
      app.use("/bookrooms", bookedRoute);

    app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
