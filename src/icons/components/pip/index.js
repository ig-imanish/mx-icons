import PipBold from "./PipBold";
import PipBroken from "./PipBroken";
import PipBulk from "./PipBulk";
import PipLinear from "./PipLinear";
import PipOutline from "./PipOutline";
import PipTwotone from "./PipTwotone";

export { PipBold, PipBroken, PipBulk, PipLinear, PipOutline, PipTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pip-bold",
    Component: PipBold,
    componentName: "PipBold",
  },,
  {
    variant: "broken",
    slug: "pip-broken",
    Component: PipBroken,
    componentName: "PipBroken",
  },,
  {
    variant: "bulk",
    slug: "pip-bulk",
    Component: PipBulk,
    componentName: "PipBulk",
  },,
  {
    variant: "linear",
    slug: "pip-linear",
    Component: PipLinear,
    componentName: "PipLinear",
  },,
  {
    variant: "outline",
    slug: "pip-outline",
    Component: PipOutline,
    componentName: "PipOutline",
  },,
  {
    variant: "twotone",
    slug: "pip-twotone",
    Component: PipTwotone,
    componentName: "PipTwotone",
  }
];

export default { PipBold, PipBroken, PipBulk, PipLinear, PipOutline, PipTwotone };
