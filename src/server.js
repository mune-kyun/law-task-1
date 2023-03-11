const express = require("express");
const { prisma } = require("./utils.js");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/c/:name", async (req, res) => {
  const { name } = req.params;
  await prisma.user.create({
    data: {
      name: name,
    },
  });
  res.send("User created");
});

app.get("/g", async (req, res) => {
  const users = await prisma.user.findMany();
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
