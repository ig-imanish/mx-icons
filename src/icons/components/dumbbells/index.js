import DumbbellsBold from "./DumbbellsBold";
import DumbbellsBroken from "./DumbbellsBroken";
import DumbbellsBulk from "./DumbbellsBulk";
import DumbbellsLinear from "./DumbbellsLinear";
import DumbbellsOutline from "./DumbbellsOutline";
import DumbbellsTwotone from "./DumbbellsTwotone";

export { DumbbellsBold, DumbbellsBroken, DumbbellsBulk, DumbbellsLinear, DumbbellsOutline, DumbbellsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dumbbells-bold",
    Component: DumbbellsBold,
    componentName: "DumbbellsBold",
  },,
  {
    variant: "broken",
    slug: "dumbbells-broken",
    Component: DumbbellsBroken,
    componentName: "DumbbellsBroken",
  },,
  {
    variant: "bulk",
    slug: "dumbbells-bulk",
    Component: DumbbellsBulk,
    componentName: "DumbbellsBulk",
  },,
  {
    variant: "linear",
    slug: "dumbbells-linear",
    Component: DumbbellsLinear,
    componentName: "DumbbellsLinear",
  },,
  {
    variant: "outline",
    slug: "dumbbells-outline",
    Component: DumbbellsOutline,
    componentName: "DumbbellsOutline",
  },,
  {
    variant: "twotone",
    slug: "dumbbells-twotone",
    Component: DumbbellsTwotone,
    componentName: "DumbbellsTwotone",
  }
];

export default { DumbbellsBold, DumbbellsBroken, DumbbellsBulk, DumbbellsLinear, DumbbellsOutline, DumbbellsTwotone };
