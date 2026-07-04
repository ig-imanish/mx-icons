import ListDownBold from "./ListDownBold";
import ListDownBroken from "./ListDownBroken";
import ListDownBulk from "./ListDownBulk";
import ListDownLinear from "./ListDownLinear";
import ListDownOutline from "./ListDownOutline";
import ListDownTwotone from "./ListDownTwotone";

export { ListDownBold, ListDownBroken, ListDownBulk, ListDownLinear, ListDownOutline, ListDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-down-bold",
    Component: ListDownBold,
    componentName: "ListDownBold",
  },,
  {
    variant: "broken",
    slug: "list-down-broken",
    Component: ListDownBroken,
    componentName: "ListDownBroken",
  },,
  {
    variant: "bulk",
    slug: "list-down-bulk",
    Component: ListDownBulk,
    componentName: "ListDownBulk",
  },,
  {
    variant: "linear",
    slug: "list-down-linear",
    Component: ListDownLinear,
    componentName: "ListDownLinear",
  },,
  {
    variant: "outline",
    slug: "list-down-outline",
    Component: ListDownOutline,
    componentName: "ListDownOutline",
  },,
  {
    variant: "twotone",
    slug: "list-down-twotone",
    Component: ListDownTwotone,
    componentName: "ListDownTwotone",
  }
];

export default { ListDownBold, ListDownBroken, ListDownBulk, ListDownLinear, ListDownOutline, ListDownTwotone };
