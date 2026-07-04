import ListCrossBold from "./ListCrossBold";
import ListCrossBroken from "./ListCrossBroken";
import ListCrossBulk from "./ListCrossBulk";
import ListCrossLinear from "./ListCrossLinear";
import ListCrossOutline from "./ListCrossOutline";
import ListCrossTwotone from "./ListCrossTwotone";

export { ListCrossBold, ListCrossBroken, ListCrossBulk, ListCrossLinear, ListCrossOutline, ListCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-cross-bold",
    Component: ListCrossBold,
    componentName: "ListCrossBold",
  },,
  {
    variant: "broken",
    slug: "list-cross-broken",
    Component: ListCrossBroken,
    componentName: "ListCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "list-cross-bulk",
    Component: ListCrossBulk,
    componentName: "ListCrossBulk",
  },,
  {
    variant: "linear",
    slug: "list-cross-linear",
    Component: ListCrossLinear,
    componentName: "ListCrossLinear",
  },,
  {
    variant: "outline",
    slug: "list-cross-outline",
    Component: ListCrossOutline,
    componentName: "ListCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "list-cross-twotone",
    Component: ListCrossTwotone,
    componentName: "ListCrossTwotone",
  }
];

export default { ListCrossBold, ListCrossBroken, ListCrossBulk, ListCrossLinear, ListCrossOutline, ListCrossTwotone };
