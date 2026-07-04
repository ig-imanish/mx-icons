import BagSmileBold from "./BagSmileBold";
import BagSmileBroken from "./BagSmileBroken";
import BagSmileBulk from "./BagSmileBulk";
import BagSmileLinear from "./BagSmileLinear";
import BagSmileOutline from "./BagSmileOutline";
import BagSmileTwotone from "./BagSmileTwotone";

export { BagSmileBold, BagSmileBroken, BagSmileBulk, BagSmileLinear, BagSmileOutline, BagSmileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-smile-bold",
    Component: BagSmileBold,
    componentName: "BagSmileBold",
  },,
  {
    variant: "broken",
    slug: "bag-smile-broken",
    Component: BagSmileBroken,
    componentName: "BagSmileBroken",
  },,
  {
    variant: "bulk",
    slug: "bag-smile-bulk",
    Component: BagSmileBulk,
    componentName: "BagSmileBulk",
  },,
  {
    variant: "linear",
    slug: "bag-smile-linear",
    Component: BagSmileLinear,
    componentName: "BagSmileLinear",
  },,
  {
    variant: "outline",
    slug: "bag-smile-outline",
    Component: BagSmileOutline,
    componentName: "BagSmileOutline",
  },,
  {
    variant: "twotone",
    slug: "bag-smile-twotone",
    Component: BagSmileTwotone,
    componentName: "BagSmileTwotone",
  }
];

export default { BagSmileBold, BagSmileBroken, BagSmileBulk, BagSmileLinear, BagSmileOutline, BagSmileTwotone };
