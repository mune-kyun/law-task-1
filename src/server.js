const express = require("express");
const { prisma } = require("./utils.js");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Find your chinese zodiac here!, 2006597701");
});

app.get("/shio", async (req, res) => {
  const shio = await prisma.shio.findMany();
  res.send(shio);
});

app.get("/shio/:year", async (req, res) => {
  const { year } = req.params;
  // await prisma.user.create({
  //   data: {
  //     name: name,
  //   },
  // });
  res.send("User created");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
