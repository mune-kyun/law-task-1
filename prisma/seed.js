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
  {
    name: "Tiger",
    personality: ["brave", "confident", "competitive"],
    description:
      "Tigers, considered to be brave, cruel, forceful, and terrifying, are the symbol of power and lordliness in Chinese culture. In ancient times, people usually compared emperors or kings with the tigers. Tigers are also considered as a patron deity for children and parents will prepare the shoes and hats with tiger designs for their babies.",
    years: [1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
  },
  {
    name: "Rabbit",
    personality: ["quiet", "elegant", "kind", "responsible"],
    description:
      "For Chinese people, the rabbit is a tame creature representing hope and life for a long time. It is tender and lovely. The moon goddess Chang'e in the Chinese legend has a rabbit as her pet, which stimulates the thought that only this creature is amiable enough to match her noble beauty. Another way of saying is that the Rabbit is the incarnation of the moon goddess per se and it is always a symbol of pureness and auspiciousness.",
    years: [1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
  },
  {
    name: "Dragon",
    personality: ["confident", "intelligent", "enthusiastic"],
    description:
      "Chinese Dragon is de facto an imaginary animal, also the only fictitious creature in the 12 zodiac animals, which is composed of 9 animals, including the body of a snake, the horns of a deer, the head of an ox, the mouth of a crocodile, the claws of an eagle, and the scales of a fish. The Dragon enjoys a very high reputation in Chinese culture and it represents auspiciousness and imperial power since ancient times.",
    years: [1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
  },
  {
    name: "Snake",
    personality: ["enigmatic", "intelligent", "wise"],
    description:
      "Snake carries the meanings of malevolence, cattiness, mystery, as well as acumen and divination. In most cases, this animal is considered evil and the elongated legless body always scares people. However, in ancient Chinese traditions, the snake once presented a venerated image and it is one of the earliest totems of Chinese nations. Chinese mother goddess Nüwa who said to have created humanity has the body of a snake and the head of a human. The Chinese dragon also has a snake body. Today, in some places in China, people still believe that a snake found in their courtyard can bring good luck.",
    years: [1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
  },
  {
    name: "Horse",
    personality: ["animated", "active", "energetic"],
    description:
      "The horse was the most frequent transport means in ancient society and it is considered as No. 1 of the most important 6 animals in China. They are strong, powerful and elegant animals. In Chinese culture, horses are always the representative of heroes and talents. People born in the Year of the Horse will share some similarities with the horse and thus they are brave, strong, talented, and independent. The Five Elements of Horse is Fire (Huo), symbolizing enthusiasm and energy, which entitles the Horse people energetic and enthusiastic character.",
    years: [1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
  },
  {
    name: "Goat",
    personality: ["calm", "gentle", "sympathetic"],
    description:
      "Sheep (goat, or ram) is among the animals that people like most. It is docile, mellow, and timid. The white cute creature often reminds people of beautiful things. In Chinese culture, the sheep is considered auspicious since long time ago and it was often used to offer sacrifices and pray for good fortune. It was also once served as currency in ancient times, and thus the sheep represents rich and lucky.",
    years: [
      1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039, 2051,
    ],
  },
  {
    name: "Monkey",
    personality: ["sharp", "smart", "curiosity"],
    description:
      "The monkey is a clever, lively, and witty animal. Because of a lot of similarities to humans, the monkey is admired by people in many cultures and Chinese culture is no exception. In traditional Chinese culture, monkey has been considered a mascot to pray for the luck of official career as it pronounces the same with the Chinese character for “marquis (hou)” in ancient times. In some west areas of China, monkey is also believed to be able to protect little babies from evil spirits.",
    years: [1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
  },
  {
    name: "Rooster",
    personality: ["observant", "hardworking", "courageous"],
    description:
      "Back in ancient times when there was no alarm clock, rooster played an important role of waking people up. Thus the first symbolic meaning of Chinese zodiac Rooster sign is punctuality. Besides, it was believed by ancient people that its crow and blood could dispel evil spirits, and that’s why rooster is also the embodiment of good luck.",
    years: [1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
  },
  {
    name: "Dog",
    personality: ["lovely", "honest", "prudent"],
    description:
      "Dog is men's good friend who can understand the human spirit and obey its master, whether he is wealthy or not. Chinese people regard it as an auspicious animal. If a dog happens to come to a house, it symbolizes the coming of fortune. In Chinese legend, the invincible God Erlang has a loyal dog partner to help him capture monsters.",
    years: [1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042],
  },

  {
    name: "Pig",
    personality: ["compassionate", "generous", "diligent"],
    description:
      "As the last sign of the Chinese zodiac, Pig represents wealth and luck from the ancient times. It is docile, has no plan to harm others, and can bring affluence to people. And its chubby faces and large ears also win the affection of people. However, pig sometimes is not thought to be a smart animal in China as it likes sleeping and eating and becomes fat, and thus it also features laziness and clumsiness.",
    years: [1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043],
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
