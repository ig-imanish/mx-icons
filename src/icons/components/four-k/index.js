import FourKBold from "./FourKBold";
import FourKBroken from "./FourKBroken";
import FourKBulk from "./FourKBulk";
import FourKLinear from "./FourKLinear";
import FourKOutline from "./FourKOutline";
import FourKTwotone from "./FourKTwotone";

export { FourKBold, FourKBroken, FourKBulk, FourKLinear, FourKOutline, FourKTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "four-k-bold",
    Component: FourKBold,
    componentName: "FourKBold",
  },,
  {
    variant: "broken",
    slug: "four-k-broken",
    Component: FourKBroken,
    componentName: "FourKBroken",
  },,
  {
    variant: "bulk",
    slug: "four-k-bulk",
    Component: FourKBulk,
    componentName: "FourKBulk",
  },,
  {
    variant: "linear",
    slug: "four-k-linear",
    Component: FourKLinear,
    componentName: "FourKLinear",
  },,
  {
    variant: "outline",
    slug: "four-k-outline",
    Component: FourKOutline,
    componentName: "FourKOutline",
  },,
  {
    variant: "twotone",
    slug: "four-k-twotone",
    Component: FourKTwotone,
    componentName: "FourKTwotone",
  }
];

export default { FourKBold, FourKBroken, FourKBulk, FourKLinear, FourKOutline, FourKTwotone };
