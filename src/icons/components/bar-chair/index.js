import BarChairBold from "./BarChairBold";
import BarChairBroken from "./BarChairBroken";
import BarChairBulk from "./BarChairBulk";
import BarChairLinear from "./BarChairLinear";
import BarChairOutline from "./BarChairOutline";
import BarChairTwotone from "./BarChairTwotone";

export { BarChairBold, BarChairBroken, BarChairBulk, BarChairLinear, BarChairOutline, BarChairTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bar-chair-bold",
    Component: BarChairBold,
    componentName: "BarChairBold",
  },,
  {
    variant: "broken",
    slug: "bar-chair-broken",
    Component: BarChairBroken,
    componentName: "BarChairBroken",
  },,
  {
    variant: "bulk",
    slug: "bar-chair-bulk",
    Component: BarChairBulk,
    componentName: "BarChairBulk",
  },,
  {
    variant: "linear",
    slug: "bar-chair-linear",
    Component: BarChairLinear,
    componentName: "BarChairLinear",
  },,
  {
    variant: "outline",
    slug: "bar-chair-outline",
    Component: BarChairOutline,
    componentName: "BarChairOutline",
  },,
  {
    variant: "twotone",
    slug: "bar-chair-twotone",
    Component: BarChairTwotone,
    componentName: "BarChairTwotone",
  }
];

export default { BarChairBold, BarChairBroken, BarChairBulk, BarChairLinear, BarChairOutline, BarChairTwotone };
