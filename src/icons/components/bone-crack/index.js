import BoneCrackBold from "./BoneCrackBold";
import BoneCrackBroken from "./BoneCrackBroken";
import BoneCrackBulk from "./BoneCrackBulk";
import BoneCrackLinear from "./BoneCrackLinear";
import BoneCrackOutline from "./BoneCrackOutline";
import BoneCrackTwotone from "./BoneCrackTwotone";

export { BoneCrackBold, BoneCrackBroken, BoneCrackBulk, BoneCrackLinear, BoneCrackOutline, BoneCrackTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bone-crack-bold",
    Component: BoneCrackBold,
    componentName: "BoneCrackBold",
  },,
  {
    variant: "broken",
    slug: "bone-crack-broken",
    Component: BoneCrackBroken,
    componentName: "BoneCrackBroken",
  },,
  {
    variant: "bulk",
    slug: "bone-crack-bulk",
    Component: BoneCrackBulk,
    componentName: "BoneCrackBulk",
  },,
  {
    variant: "linear",
    slug: "bone-crack-linear",
    Component: BoneCrackLinear,
    componentName: "BoneCrackLinear",
  },,
  {
    variant: "outline",
    slug: "bone-crack-outline",
    Component: BoneCrackOutline,
    componentName: "BoneCrackOutline",
  },,
  {
    variant: "twotone",
    slug: "bone-crack-twotone",
    Component: BoneCrackTwotone,
    componentName: "BoneCrackTwotone",
  }
];

export default { BoneCrackBold, BoneCrackBroken, BoneCrackBulk, BoneCrackLinear, BoneCrackOutline, BoneCrackTwotone };
