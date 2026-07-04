import ListCheckBold from "./ListCheckBold";
import ListCheckBroken from "./ListCheckBroken";
import ListCheckBulk from "./ListCheckBulk";
import ListCheckLinear from "./ListCheckLinear";
import ListCheckOutline from "./ListCheckOutline";
import ListCheckTwotone from "./ListCheckTwotone";

export { ListCheckBold, ListCheckBroken, ListCheckBulk, ListCheckLinear, ListCheckOutline, ListCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-check-bold",
    Component: ListCheckBold,
    componentName: "ListCheckBold",
  },,
  {
    variant: "broken",
    slug: "list-check-broken",
    Component: ListCheckBroken,
    componentName: "ListCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "list-check-bulk",
    Component: ListCheckBulk,
    componentName: "ListCheckBulk",
  },,
  {
    variant: "linear",
    slug: "list-check-linear",
    Component: ListCheckLinear,
    componentName: "ListCheckLinear",
  },,
  {
    variant: "outline",
    slug: "list-check-outline",
    Component: ListCheckOutline,
    componentName: "ListCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "list-check-twotone",
    Component: ListCheckTwotone,
    componentName: "ListCheckTwotone",
  }
];

export default { ListCheckBold, ListCheckBroken, ListCheckBulk, ListCheckLinear, ListCheckOutline, ListCheckTwotone };
