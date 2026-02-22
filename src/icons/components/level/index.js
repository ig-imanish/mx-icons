import LevelBold from "./LevelBold";
import LevelBroken from "./LevelBroken";
import LevelBulk from "./LevelBulk";
import LevelLinear from "./LevelLinear";
import LevelOutline from "./LevelOutline";
import LevelTwotone from "./LevelTwotone";

export { LevelBold, LevelBroken, LevelBulk, LevelLinear, LevelOutline, LevelTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "level-bold",
    Component: LevelBold,
    componentName: "LevelBold",
  },
  {
    variant: "broken",
    slug: "level-broken",
    Component: LevelBroken,
    componentName: "LevelBroken",
  },
  {
    variant: "bulk",
    slug: "level-bulk",
    Component: LevelBulk,
    componentName: "LevelBulk",
  },
  {
    variant: "linear",
    slug: "level-linear",
    Component: LevelLinear,
    componentName: "LevelLinear",
  },
  {
    variant: "outline",
    slug: "level-outline",
    Component: LevelOutline,
    componentName: "LevelOutline",
  },
  {
    variant: "twotone",
    slug: "level-twotone",
    Component: LevelTwotone,
    componentName: "LevelTwotone",
  },
];
