export const meta = {
  name: "plantita",
  description: "Grow and sell plants and flowers to earn money!",
  version: "1.0.1",
  author: "Liane Cagara",
  usage: "{prefix}plantita",
  category: "Idle Accumulation Games",
  permissions: [0],
  noPrefix: false,
  otherNames: ["halaman", "plantito"],
  shopPrice: 40,
  requirement: "2.5.0",
  icon: "🌱",
};

export const style = {
  title: "Plantita Simulation 🌱",
  contentFont: /* "elegant" */ "fancy",
  titleFont: "bold",
};

const plantitaSimulation = {
  key: "plantita",
  verb: "grow",
  verbing: "growing",
  pastTense: "grown",
  checkIcon: "🌱",
  initialStorage: 50,
  itemData: [
    {
      icon: "🌵",
      delay: 10,
      priceA: 5,
      priceB: 8,
      name: "Cactus",
      chance: 0.8,
    },
    {
      icon: "🌷",
      delay: 12,
      priceA: 7,
      priceB: 10,
      name: "Tulip",
      chance: 0.7,
    },
    {
      icon: "🌸",
      delay: 8,
      priceA: 6,
      priceB: 9,
      name: "Cherry Blossom",
      chance: 0.85,
    },
    {
      icon: "🌻",
      delay: 7,
      priceA: 4,
      priceB: 6,
      name: "Sunflower",
      chance: 0.9,
    },
    {
      icon: "🌺",
      delay: 15,
      priceA: 9,
      priceB: 12,
      name: "Hibiscus",
      chance: 0.75,
    },
    {
      icon: "🌼",
      delay: 5,
      priceA: 3,
      priceB: 5,
      name: "Daisy",
      chance: 0.9,
    },
    {
      icon: "💐",
      delay: 10,
      priceA: 10,
      priceB: 15,
      name: "Bouquet",
      chance: 0.8,
    },
    {
      icon: "🍀",
      delay: 3,
      priceA: 2,
      priceB: 4,
      name: "Four-leaf Clover",
      chance: 0.95,
    },
    {
      icon: "🌿",
      delay: 4,
      priceA: 4,
      priceB: 6,
      name: "Herbs",
      chance: 0.85,
    },
    {
      icon: "🍁",
      delay: 6,
      priceA: 3,
      priceB: 5,
      name: "Maple Leaf",
      chance: 0.9,
    },
    {
      icon: "🌲",
      delay: 15,
      priceA: 8,
      priceB: 12,
      name: "Pine Tree",
      chance: 0.7,
    },
    {
      icon: "🌳",
      delay: 20,
      priceA: 15,
      priceB: 20,
      name: "Oak Tree",
      chance: 0.75,
    },
    {
      icon: "🌵",
      delay: 8,
      priceA: 6,
      priceB: 9,
      name: "Succulent",
      chance: 0.85,
    },
    {
      icon: "🍃",
      delay: 5,
      priceA: 2,
      priceB: 4,
      name: "Leaves",
      chance: 0.9,
    },
    {
      icon: "🌹",
      delay: 10,
      priceA: 8,
      priceB: 12,
      name: "Rose",
      chance: 0.8,
    },
    {
      icon: "🌾",
      delay: 7,
      priceA: 4,
      priceB: 6,
      name: "Wheat",
      chance: 0.85,
    },
    {
      icon: "🍇",
      delay: 6,
      priceA: 5,
      priceB: 8,
      name: "Grapevine",
      chance: 0.85,
    },
    {
      icon: "🍉",
      delay: 12,
      priceA: 6,
      priceB: 9,
      name: "Watermelon",
      chance: 0.85,
    },
    {
      icon: "🍓",
      delay: 8,
      priceA: 4,
      priceB: 7,
      name: "Strawberry",
      chance: 0.9,
    },
    {
      icon: "🍆",
      delay: 5,
      priceA: 3,
      priceB: 6,
      name: "Eggplant",
      chance: 0.85,
    },
    {
      icon: "🌶️",
      delay: 5,
      priceA: 4,
      priceB: 7,
      name: "Chili Pepper",
      chance: 0.85,
    },
    {
      icon: "🌽",
      delay: 6,
      priceA: 4,
      priceB: 7,
      name: "Corn",
      chance: 0.85,
    },
    {
      icon: "🍅",
      delay: 7,
      priceA: 5,
      priceB: 8,
      name: "Tomato",
      chance: 0.85,
    },
  ],
  actionEmoji: "🌻",
  initialStorage: 40,
};

export async function entry({ GameSimulator }) {
  const simu = new GameSimulator(plantitaSimulation);
  await simu.simulateAction();
}
