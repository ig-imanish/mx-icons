import WomenBold from "./WomenBold";
import WomenBroken from "./WomenBroken";
import WomenBulk from "./WomenBulk";
import WomenLinear from "./WomenLinear";
import WomenOutline from "./WomenOutline";
import WomenTwotone from "./WomenTwotone";

export { WomenBold, WomenBroken, WomenBulk, WomenLinear, WomenOutline, WomenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "women-bold",
    Component: WomenBold,
    componentName: "WomenBold",
  },,
  {
    variant: "broken",
    slug: "women-broken",
    Component: WomenBroken,
    componentName: "WomenBroken",
  },,
  {
    variant: "bulk",
    slug: "women-bulk",
    Component: WomenBulk,
    componentName: "WomenBulk",
  },,
  {
    variant: "linear",
    slug: "women-linear",
    Component: WomenLinear,
    componentName: "WomenLinear",
  },,
  {
    variant: "outline",
    slug: "women-outline",
    Component: WomenOutline,
    componentName: "WomenOutline",
  },,
  {
    variant: "twotone",
    slug: "women-twotone",
    Component: WomenTwotone,
    componentName: "WomenTwotone",
  }
];

export default { WomenBold, WomenBroken, WomenBulk, WomenLinear, WomenOutline, WomenTwotone };
