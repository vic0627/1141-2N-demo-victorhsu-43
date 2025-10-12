import express from "express";
import db from "./database.js";

const app = express();

app.use("/api/blog_43", async (req, res, next) => {
  const results = await db.query("select * from blog_43");
  console.log("results", JSON.stringify(results));
  res.json(results);
});

app.use("/", (req, res, next) => {
  res.send("VICTOR HSU, 213410243");
});

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log(`server is running on port`, port);
});
