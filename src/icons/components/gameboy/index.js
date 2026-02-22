import GameboyBold from "./GameboyBold";
import GameboyBroken from "./GameboyBroken";
import GameboyBulk from "./GameboyBulk";
import GameboyLinear from "./GameboyLinear";
import GameboyOutline from "./GameboyOutline";
import GameboyTwotone from "./GameboyTwotone";

export { GameboyBold, GameboyBroken, GameboyBulk, GameboyLinear, GameboyOutline, GameboyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gameboy-bold",
    Component: GameboyBold,
    componentName: "GameboyBold",
  },
  {
    variant: "broken",
    slug: "gameboy-broken",
    Component: GameboyBroken,
    componentName: "GameboyBroken",
  },
  {
    variant: "bulk",
    slug: "gameboy-bulk",
    Component: GameboyBulk,
    componentName: "GameboyBulk",
  },
  {
    variant: "linear",
    slug: "gameboy-linear",
    Component: GameboyLinear,
    componentName: "GameboyLinear",
  },
  {
    variant: "outline",
    slug: "gameboy-outline",
    Component: GameboyOutline,
    componentName: "GameboyOutline",
  },
  {
    variant: "twotone",
    slug: "gameboy-twotone",
    Component: GameboyTwotone,
    componentName: "GameboyTwotone",
  },
];
