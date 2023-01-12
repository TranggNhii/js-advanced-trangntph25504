const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  scorers: {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2,
  },
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
for (const [key, value] of Object.entries(game.scorers)) {
  //   console.log(`Goal ${value}: ${key}`);
}
//2
let average = 0;
for (const point of Object.values(game.odds)) {
  average += point;
}
average /= Object.values(game.odds).length;
// console.log(`Average: ${average}`);
//3
for (const [team, odd] of Object.entries(game.odds)) {
  let result = team === "x" ? `hòa là:` : `thắng của ${game[team]} là:`;
  console.log(`Tỉ lệ ${result} ${odd} `);
}
