import ListBold from "./ListBold";
import ListBroken from "./ListBroken";
import ListBulk from "./ListBulk";
import ListLinear from "./ListLinear";
import ListOutline from "./ListOutline";
import ListTwotone from "./ListTwotone";

export { ListBold, ListBroken, ListBulk, ListLinear, ListOutline, ListTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-bold",
    Component: ListBold,
    componentName: "ListBold",
  },,
  {
    variant: "broken",
    slug: "list-broken",
    Component: ListBroken,
    componentName: "ListBroken",
  },,
  {
    variant: "bulk",
    slug: "list-bulk",
    Component: ListBulk,
    componentName: "ListBulk",
  },,
  {
    variant: "linear",
    slug: "list-linear",
    Component: ListLinear,
    componentName: "ListLinear",
  },,
  {
    variant: "outline",
    slug: "list-outline",
    Component: ListOutline,
    componentName: "ListOutline",
  },,
  {
    variant: "twotone",
    slug: "list-twotone",
    Component: ListTwotone,
    componentName: "ListTwotone",
  }
];

export default { ListBold, ListBroken, ListBulk, ListLinear, ListOutline, ListTwotone };
