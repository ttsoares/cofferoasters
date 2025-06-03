export const heads = [
  "How do you drink your coffee?",
  "What type of coffee?",
  "How much would you like?",
  "Want us to grind them?",
  "What type of delivery do you prefer?",
];

export type Option = {
  title: string;
  body: string;
  how?: number;
  type?: number;
  qtt?: number;
  grind?: number;
  freq?: number;
};

export const options: Option[][] = [
  [
    {
      title: "Capsule",
      body: "Compatible with Nespresso systems and similar brewers",
      how: 15,
    },
    {
      title: "Filter",
      body: "For pour over or drip methods like Aeropress, Chemex, and V60",
      how: 8,
    },
    {
      title: "Espresso",
      body: "Dense and finely ground beans for an intense, flavorful experience",
      how: 10,
    },
  ],
  [
    {
      title: "Single Origin",
      body: "Distinct, high quality coffee from a specific family-owned farm",
      type: 3,
    },
    {
      title: "Decaf",
      body: "Just like regular coffee, except the caffeine has been removed",
      type: 4,
    },
    {
      title: "Blended",
      body: "Combination of two or three dark roasted beans of organic coffees",
      type: 2,
    },
  ],
  [
    {
      title: "250g",
      body: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      qtt: 0.25,
    },
    {
      title: "500g",
      body: "Perfect option for a couple. Yields about 40 delectable cups.",
      qtt: 0.5,
    },
    {
      title: "1000g",
      body: "Perfect for offices and events. Yields about 90 delightful cups.",
      qtt: 1,
    },
  ],
  [
    {
      title: "Wholebean",
      body: "Best choice if you cherish the full sensory experience",
      grind: 1,
    },
    {
      title: "Filter",
      body: "For drip or pour-over coffee methods such as V60 or Aeropress",
      grind: 1.5,
    },
    {
      title: "Cafetiere",
      body: "Course ground beans specially suited for french press coffee",
      grind: 1.4,
    },
  ],
  [
    {
      title: "Every week",
      body: "$7.20 per shipment. Includes free first-class shipping.",
      freq: 4,
    },
    {
      title: "Every 2 weeks",
      body: "$9.60 per shipment. Includes free priority shipping.",
      freq: 2,
    },
    {
      title: "Every month",
      body: "$12.00 per shipment. Includes free priority shipping.",
      freq: 1,
    },
  ],
];
