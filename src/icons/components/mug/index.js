import MugBold from "./MugBold";
import MugBroken from "./MugBroken";
import MugBulk from "./MugBulk";
import MugLinear from "./MugLinear";
import MugOutline from "./MugOutline";
import MugTwotone from "./MugTwotone";

export { MugBold, MugBroken, MugBulk, MugLinear, MugOutline, MugTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mug-bold",
    Component: MugBold,
    componentName: "MugBold",
  },,
  {
    variant: "broken",
    slug: "mug-broken",
    Component: MugBroken,
    componentName: "MugBroken",
  },,
  {
    variant: "bulk",
    slug: "mug-bulk",
    Component: MugBulk,
    componentName: "MugBulk",
  },,
  {
    variant: "linear",
    slug: "mug-linear",
    Component: MugLinear,
    componentName: "MugLinear",
  },,
  {
    variant: "outline",
    slug: "mug-outline",
    Component: MugOutline,
    componentName: "MugOutline",
  },,
  {
    variant: "twotone",
    slug: "mug-twotone",
    Component: MugTwotone,
    componentName: "MugTwotone",
  }
];

export default { MugBold, MugBroken, MugBulk, MugLinear, MugOutline, MugTwotone };
