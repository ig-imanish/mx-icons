import ListVerticalBold from "./ListVerticalBold";
import ListVerticalBroken from "./ListVerticalBroken";
import ListVerticalBulk from "./ListVerticalBulk";
import ListVerticalLinear from "./ListVerticalLinear";
import ListVerticalOutline from "./ListVerticalOutline";
import ListVerticalTwotone from "./ListVerticalTwotone";

export { ListVerticalBold, ListVerticalBroken, ListVerticalBulk, ListVerticalLinear, ListVerticalOutline, ListVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-vertical-bold",
    Component: ListVerticalBold,
    componentName: "ListVerticalBold",
  },,
  {
    variant: "broken",
    slug: "list-vertical-broken",
    Component: ListVerticalBroken,
    componentName: "ListVerticalBroken",
  },,
  {
    variant: "bulk",
    slug: "list-vertical-bulk",
    Component: ListVerticalBulk,
    componentName: "ListVerticalBulk",
  },,
  {
    variant: "linear",
    slug: "list-vertical-linear",
    Component: ListVerticalLinear,
    componentName: "ListVerticalLinear",
  },,
  {
    variant: "outline",
    slug: "list-vertical-outline",
    Component: ListVerticalOutline,
    componentName: "ListVerticalOutline",
  },,
  {
    variant: "twotone",
    slug: "list-vertical-twotone",
    Component: ListVerticalTwotone,
    componentName: "ListVerticalTwotone",
  }
];

export default { ListVerticalBold, ListVerticalBroken, ListVerticalBulk, ListVerticalLinear, ListVerticalOutline, ListVerticalTwotone };
