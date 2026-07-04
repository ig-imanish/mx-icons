import ExitBold from "./ExitBold";
import ExitBroken from "./ExitBroken";
import ExitBulk from "./ExitBulk";
import ExitLinear from "./ExitLinear";
import ExitOutline from "./ExitOutline";
import ExitTwotone from "./ExitTwotone";

export { ExitBold, ExitBroken, ExitBulk, ExitLinear, ExitOutline, ExitTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "exit-bold",
    Component: ExitBold,
    componentName: "ExitBold",
  },,
  {
    variant: "broken",
    slug: "exit-broken",
    Component: ExitBroken,
    componentName: "ExitBroken",
  },,
  {
    variant: "bulk",
    slug: "exit-bulk",
    Component: ExitBulk,
    componentName: "ExitBulk",
  },,
  {
    variant: "linear",
    slug: "exit-linear",
    Component: ExitLinear,
    componentName: "ExitLinear",
  },,
  {
    variant: "outline",
    slug: "exit-outline",
    Component: ExitOutline,
    componentName: "ExitOutline",
  },,
  {
    variant: "twotone",
    slug: "exit-twotone",
    Component: ExitTwotone,
    componentName: "ExitTwotone",
  }
];

export default { ExitBold, ExitBroken, ExitBulk, ExitLinear, ExitOutline, ExitTwotone };
