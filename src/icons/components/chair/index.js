import ChairBold from "./ChairBold";
import ChairBroken from "./ChairBroken";
import ChairBulk from "./ChairBulk";
import ChairLinear from "./ChairLinear";
import ChairOutline from "./ChairOutline";
import ChairTwotone from "./ChairTwotone";

export { ChairBold, ChairBroken, ChairBulk, ChairLinear, ChairOutline, ChairTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chair-bold",
    Component: ChairBold,
    componentName: "ChairBold",
  },,
  {
    variant: "broken",
    slug: "chair-broken",
    Component: ChairBroken,
    componentName: "ChairBroken",
  },,
  {
    variant: "bulk",
    slug: "chair-bulk",
    Component: ChairBulk,
    componentName: "ChairBulk",
  },,
  {
    variant: "linear",
    slug: "chair-linear",
    Component: ChairLinear,
    componentName: "ChairLinear",
  },,
  {
    variant: "outline",
    slug: "chair-outline",
    Component: ChairOutline,
    componentName: "ChairOutline",
  },,
  {
    variant: "twotone",
    slug: "chair-twotone",
    Component: ChairTwotone,
    componentName: "ChairTwotone",
  }
];

export default { ChairBold, ChairBroken, ChairBulk, ChairLinear, ChairOutline, ChairTwotone };
