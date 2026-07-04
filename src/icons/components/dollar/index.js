import DollarBold from "./DollarBold";
import DollarBroken from "./DollarBroken";
import DollarBulk from "./DollarBulk";
import DollarLinear from "./DollarLinear";
import DollarOutline from "./DollarOutline";
import DollarTwotone from "./DollarTwotone";

export { DollarBold, DollarBroken, DollarBulk, DollarLinear, DollarOutline, DollarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dollar-bold",
    Component: DollarBold,
    componentName: "DollarBold",
  },,
  {
    variant: "broken",
    slug: "dollar-broken",
    Component: DollarBroken,
    componentName: "DollarBroken",
  },,
  {
    variant: "bulk",
    slug: "dollar-bulk",
    Component: DollarBulk,
    componentName: "DollarBulk",
  },,
  {
    variant: "linear",
    slug: "dollar-linear",
    Component: DollarLinear,
    componentName: "DollarLinear",
  },,
  {
    variant: "outline",
    slug: "dollar-outline",
    Component: DollarOutline,
    componentName: "DollarOutline",
  },,
  {
    variant: "twotone",
    slug: "dollar-twotone",
    Component: DollarTwotone,
    componentName: "DollarTwotone",
  }
];

export default { DollarBold, DollarBroken, DollarBulk, DollarLinear, DollarOutline, DollarTwotone };
