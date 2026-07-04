import CorkscrewBold from "./CorkscrewBold";
import CorkscrewBroken from "./CorkscrewBroken";
import CorkscrewBulk from "./CorkscrewBulk";
import CorkscrewLinear from "./CorkscrewLinear";
import CorkscrewOutline from "./CorkscrewOutline";
import CorkscrewTwotone from "./CorkscrewTwotone";

export { CorkscrewBold, CorkscrewBroken, CorkscrewBulk, CorkscrewLinear, CorkscrewOutline, CorkscrewTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "corkscrew-bold",
    Component: CorkscrewBold,
    componentName: "CorkscrewBold",
  },,
  {
    variant: "broken",
    slug: "corkscrew-broken",
    Component: CorkscrewBroken,
    componentName: "CorkscrewBroken",
  },,
  {
    variant: "bulk",
    slug: "corkscrew-bulk",
    Component: CorkscrewBulk,
    componentName: "CorkscrewBulk",
  },,
  {
    variant: "linear",
    slug: "corkscrew-linear",
    Component: CorkscrewLinear,
    componentName: "CorkscrewLinear",
  },,
  {
    variant: "outline",
    slug: "corkscrew-outline",
    Component: CorkscrewOutline,
    componentName: "CorkscrewOutline",
  },,
  {
    variant: "twotone",
    slug: "corkscrew-twotone",
    Component: CorkscrewTwotone,
    componentName: "CorkscrewTwotone",
  }
];

export default { CorkscrewBold, CorkscrewBroken, CorkscrewBulk, CorkscrewLinear, CorkscrewOutline, CorkscrewTwotone };
