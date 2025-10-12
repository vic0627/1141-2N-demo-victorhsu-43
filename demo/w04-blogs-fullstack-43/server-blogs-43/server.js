import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  res.send("VICTOR HSU, 213410243");
});

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log(`server is running on port`, port);
});
