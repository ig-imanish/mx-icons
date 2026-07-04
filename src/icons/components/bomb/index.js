import BombBold from "./BombBold";
import BombBroken from "./BombBroken";
import BombBulk from "./BombBulk";
import BombLinear from "./BombLinear";
import BombOutline from "./BombOutline";
import BombTwotone from "./BombTwotone";

export { BombBold, BombBroken, BombBulk, BombLinear, BombOutline, BombTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bomb-bold",
    Component: BombBold,
    componentName: "BombBold",
  },,
  {
    variant: "broken",
    slug: "bomb-broken",
    Component: BombBroken,
    componentName: "BombBroken",
  },,
  {
    variant: "bulk",
    slug: "bomb-bulk",
    Component: BombBulk,
    componentName: "BombBulk",
  },,
  {
    variant: "linear",
    slug: "bomb-linear",
    Component: BombLinear,
    componentName: "BombLinear",
  },,
  {
    variant: "outline",
    slug: "bomb-outline",
    Component: BombOutline,
    componentName: "BombOutline",
  },,
  {
    variant: "twotone",
    slug: "bomb-twotone",
    Component: BombTwotone,
    componentName: "BombTwotone",
  }
];

export default { BombBold, BombBroken, BombBulk, BombLinear, BombOutline, BombTwotone };
