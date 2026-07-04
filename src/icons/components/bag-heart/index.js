import BagHeartBold from "./BagHeartBold";
import BagHeartBroken from "./BagHeartBroken";
import BagHeartBulk from "./BagHeartBulk";
import BagHeartLinear from "./BagHeartLinear";
import BagHeartOutline from "./BagHeartOutline";
import BagHeartTwotone from "./BagHeartTwotone";

export { BagHeartBold, BagHeartBroken, BagHeartBulk, BagHeartLinear, BagHeartOutline, BagHeartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-heart-bold",
    Component: BagHeartBold,
    componentName: "BagHeartBold",
  },,
  {
    variant: "broken",
    slug: "bag-heart-broken",
    Component: BagHeartBroken,
    componentName: "BagHeartBroken",
  },,
  {
    variant: "bulk",
    slug: "bag-heart-bulk",
    Component: BagHeartBulk,
    componentName: "BagHeartBulk",
  },,
  {
    variant: "linear",
    slug: "bag-heart-linear",
    Component: BagHeartLinear,
    componentName: "BagHeartLinear",
  },,
  {
    variant: "outline",
    slug: "bag-heart-outline",
    Component: BagHeartOutline,
    componentName: "BagHeartOutline",
  },,
  {
    variant: "twotone",
    slug: "bag-heart-twotone",
    Component: BagHeartTwotone,
    componentName: "BagHeartTwotone",
  }
];

export default { BagHeartBold, BagHeartBroken, BagHeartBulk, BagHeartLinear, BagHeartOutline, BagHeartTwotone };
