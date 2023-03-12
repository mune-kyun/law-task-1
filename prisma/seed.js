const { prisma } = require("../src/utils.js");

const shios = [
  {
    name: "Rat",
    personality: ["quick-witted", "resourceful", "versatile", "kind"],
    description:
      "An interesting Chinese legend about the ranking of the Rat goes that the Chinese supreme deity Jade Emperor held a birthday party and would decide the order of the zodiac animals according to their arrival times. Originally, the hardworking Ox departed early and should be the first one to reach. However, the Rat hid in the Ox’s ear and jumped down when arriving, occupying the first place. Thus the Rat had since been the No. 1 in the 12-year cycle and represents spirit, wit, alertness, delicacy, and flexibility.",
    years: [1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
  },
  {
    name: "Ox",
    personality: ["diligent", "dependable", "strong", "determined"],
    description:
      "Oxen used to be capable farming tools in an agricultural society, which attach to the symbol of diligence, persistence, and honesty. In Chinese culture, Ox is a faithful friend that made great contributions to the development of the society. Like the ox, people born in the Year of the Ox are industrious, cautious, hold their faith firmly, and always glad to offer help.",
    years: [1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
  },
];

async function main() {
  await prisma.shio.createMany({
    data: shios,
  });
  console.log("done");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
