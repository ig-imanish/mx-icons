import DesigntoolsBold from "./DesigntoolsBold";
import DesigntoolsBroken from "./DesigntoolsBroken";
import DesigntoolsBulk from "./DesigntoolsBulk";
import DesigntoolsLinear from "./DesigntoolsLinear";
import DesigntoolsOutline from "./DesigntoolsOutline";
import DesigntoolsTwotone from "./DesigntoolsTwotone";

export { DesigntoolsBold, DesigntoolsBroken, DesigntoolsBulk, DesigntoolsLinear, DesigntoolsOutline, DesigntoolsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "designtools-bold",
    Component: DesigntoolsBold,
    componentName: "DesigntoolsBold",
  },
  {
    variant: "broken",
    slug: "designtools-broken",
    Component: DesigntoolsBroken,
    componentName: "DesigntoolsBroken",
  },
  {
    variant: "bulk",
    slug: "designtools-bulk",
    Component: DesigntoolsBulk,
    componentName: "DesigntoolsBulk",
  },
  {
    variant: "linear",
    slug: "designtools-linear",
    Component: DesigntoolsLinear,
    componentName: "DesigntoolsLinear",
  },
  {
    variant: "outline",
    slug: "designtools-outline",
    Component: DesigntoolsOutline,
    componentName: "DesigntoolsOutline",
  },
  {
    variant: "twotone",
    slug: "designtools-twotone",
    Component: DesigntoolsTwotone,
    componentName: "DesigntoolsTwotone",
  },
];
