import BagHappyBold from "./BagHappyBold";
import BagHappyBroken from "./BagHappyBroken";
import BagHappyBulk from "./BagHappyBulk";
import BagHappyLinear from "./BagHappyLinear";
import BagHappyOutline from "./BagHappyOutline";
import BagHappyTwotone from "./BagHappyTwotone";

export { BagHappyBold, BagHappyBroken, BagHappyBulk, BagHappyLinear, BagHappyOutline, BagHappyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-happy-bold",
    Component: BagHappyBold,
    componentName: "BagHappyBold",
  },
  {
    variant: "broken",
    slug: "bag-happy-broken",
    Component: BagHappyBroken,
    componentName: "BagHappyBroken",
  },
  {
    variant: "bulk",
    slug: "bag-happy-bulk",
    Component: BagHappyBulk,
    componentName: "BagHappyBulk",
  },
  {
    variant: "linear",
    slug: "bag-happy-linear",
    Component: BagHappyLinear,
    componentName: "BagHappyLinear",
  },
  {
    variant: "outline",
    slug: "bag-happy-outline",
    Component: BagHappyOutline,
    componentName: "BagHappyOutline",
  },
  {
    variant: "twotone",
    slug: "bag-happy-twotone",
    Component: BagHappyTwotone,
    componentName: "BagHappyTwotone",
  },
];
