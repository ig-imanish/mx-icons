import GameBold from "./GameBold";
import GameBroken from "./GameBroken";
import GameBulk from "./GameBulk";
import GameLinear from "./GameLinear";
import GameOutline from "./GameOutline";
import GameTwotone from "./GameTwotone";

export { GameBold, GameBroken, GameBulk, GameLinear, GameOutline, GameTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "game-bold",
    Component: GameBold,
    componentName: "GameBold",
  },
  {
    variant: "broken",
    slug: "game-broken",
    Component: GameBroken,
    componentName: "GameBroken",
  },
  {
    variant: "bulk",
    slug: "game-bulk",
    Component: GameBulk,
    componentName: "GameBulk",
  },
  {
    variant: "linear",
    slug: "game-linear",
    Component: GameLinear,
    componentName: "GameLinear",
  },
  {
    variant: "outline",
    slug: "game-outline",
    Component: GameOutline,
    componentName: "GameOutline",
  },
  {
    variant: "twotone",
    slug: "game-twotone",
    Component: GameTwotone,
    componentName: "GameTwotone",
  },
];
