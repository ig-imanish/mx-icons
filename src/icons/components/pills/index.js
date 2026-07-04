import PillsBold from "./PillsBold";
import PillsBroken from "./PillsBroken";
import PillsBulk from "./PillsBulk";
import PillsLinear from "./PillsLinear";
import PillsOutline from "./PillsOutline";
import PillsTwotone from "./PillsTwotone";

export { PillsBold, PillsBroken, PillsBulk, PillsLinear, PillsOutline, PillsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pills-bold",
    Component: PillsBold,
    componentName: "PillsBold",
  },,
  {
    variant: "broken",
    slug: "pills-broken",
    Component: PillsBroken,
    componentName: "PillsBroken",
  },,
  {
    variant: "bulk",
    slug: "pills-bulk",
    Component: PillsBulk,
    componentName: "PillsBulk",
  },,
  {
    variant: "linear",
    slug: "pills-linear",
    Component: PillsLinear,
    componentName: "PillsLinear",
  },,
  {
    variant: "outline",
    slug: "pills-outline",
    Component: PillsOutline,
    componentName: "PillsOutline",
  },,
  {
    variant: "twotone",
    slug: "pills-twotone",
    Component: PillsTwotone,
    componentName: "PillsTwotone",
  }
];

export default { PillsBold, PillsBroken, PillsBulk, PillsLinear, PillsOutline, PillsTwotone };
