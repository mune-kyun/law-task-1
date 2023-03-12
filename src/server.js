const express = require("express");
const cors = require("cors");
const { prisma } = require("./utils.js");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Find your chinese zodiac here!, 2006597701");
});

app.get("/shio/custom", async (req, res) => {
  const shio = await prisma.shio.findMany({
    where: {
      isCustom: true,
    },
  });
  res.send(shio);
});

app.get("/shio", async (req, res) => {
  const shio = await prisma.shio.findMany({
    where: {
      isCustom: false,
    },
  });
  res.send(shio);
});

app.get("/shio/name/:name", async (req, res) => {
  const { name } = req.params;

  const shio = await prisma.shio.findFirst({
    where: {
      name: name,
    },
  });
  res.send(shio);
});

app.get("/shio/:year", async (req, res) => {
  let year = parseInt(req.params.year);
  let sign;

  let mod = (year - 2000) % 12;
  if (mod < 0) mod += 12;

  if (mod == 0) {
    sign = "Dragon";
  } else if (mod == 1) {
    sign = "Snake";
  } else if (mod == 2) {
    sign = "Horse";
  } else if (mod == 3) {
    sign = "sheep";
  } else if (mod == 4) {
    sign = "Monkey";
  } else if (mod == 5) {
    sign = "Rooster";
  } else if (mod == 6) {
    sign = "Dog";
  } else if (mod == 7) {
    sign = "Pig";
  } else if (mod == 8) {
    sign = "Rat";
  } else if (mod == 9) {
    sign = "Ox";
  } else if (mod == 10) {
    sign = "Tiger";
  } else {
    sign = "Hare";
  }

  const shio = await prisma.shio.findFirst({
    where: {
      isCustom: false,
      name: sign,
    },
  });

  res.send({ data: shio });
});

app.post("/shio/custom/c", async (req, res) => {
  const { name, personality, description, years } = req.body;
  let modRes = (years[0] - 2000) % 12;
  if (modRes < 0) modRes += 12;

  const shio = await prisma.shio.create({
    data: {
      name: name,
      personality: personality,
      description: description,
      years: years,
      isCustom: true,
      modResult: modRes,
    },
  });
  res.send({ data: shio });
});

app.get("/shio/custom/:year", async (req, res) => {
  let year = parseInt(req.params.year);
  let modRes = (year - 2000) % 12;
  if (modRes < 0) modRes += 12;

  const shios = await prisma.shio.findMany({
    where: {
      modResult: modRes,
    },
  });
  res.send({ data: shios });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* 
http://www.creativeartsguild.org/images/uploads/categories/12_Chinese_Zodiac_Signs.pdf
https://www.travelchinaguide.com/intro/social_customs/zodiac/
*/
