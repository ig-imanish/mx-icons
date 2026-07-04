import ProgrammingBold from "./ProgrammingBold";
import ProgrammingBroken from "./ProgrammingBroken";
import ProgrammingBulk from "./ProgrammingBulk";
import ProgrammingLinear from "./ProgrammingLinear";
import ProgrammingOutline from "./ProgrammingOutline";
import ProgrammingTwotone from "./ProgrammingTwotone";

export { ProgrammingBold, ProgrammingBroken, ProgrammingBulk, ProgrammingLinear, ProgrammingOutline, ProgrammingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "programming-bold",
    Component: ProgrammingBold,
    componentName: "ProgrammingBold",
  },,
  {
    variant: "broken",
    slug: "programming-broken",
    Component: ProgrammingBroken,
    componentName: "ProgrammingBroken",
  },,
  {
    variant: "bulk",
    slug: "programming-bulk",
    Component: ProgrammingBulk,
    componentName: "ProgrammingBulk",
  },,
  {
    variant: "linear",
    slug: "programming-linear",
    Component: ProgrammingLinear,
    componentName: "ProgrammingLinear",
  },,
  {
    variant: "outline",
    slug: "programming-outline",
    Component: ProgrammingOutline,
    componentName: "ProgrammingOutline",
  },,
  {
    variant: "twotone",
    slug: "programming-twotone",
    Component: ProgrammingTwotone,
    componentName: "ProgrammingTwotone",
  }
];

export default { ProgrammingBold, ProgrammingBroken, ProgrammingBulk, ProgrammingLinear, ProgrammingOutline, ProgrammingTwotone };
