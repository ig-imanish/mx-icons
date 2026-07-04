import ListUpBold from "./ListUpBold";
import ListUpBroken from "./ListUpBroken";
import ListUpBulk from "./ListUpBulk";
import ListUpLinear from "./ListUpLinear";
import ListUpOutline from "./ListUpOutline";
import ListUpTwotone from "./ListUpTwotone";

export { ListUpBold, ListUpBroken, ListUpBulk, ListUpLinear, ListUpOutline, ListUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-up-bold",
    Component: ListUpBold,
    componentName: "ListUpBold",
  },,
  {
    variant: "broken",
    slug: "list-up-broken",
    Component: ListUpBroken,
    componentName: "ListUpBroken",
  },,
  {
    variant: "bulk",
    slug: "list-up-bulk",
    Component: ListUpBulk,
    componentName: "ListUpBulk",
  },,
  {
    variant: "linear",
    slug: "list-up-linear",
    Component: ListUpLinear,
    componentName: "ListUpLinear",
  },,
  {
    variant: "outline",
    slug: "list-up-outline",
    Component: ListUpOutline,
    componentName: "ListUpOutline",
  },,
  {
    variant: "twotone",
    slug: "list-up-twotone",
    Component: ListUpTwotone,
    componentName: "ListUpTwotone",
  }
];

export default { ListUpBold, ListUpBroken, ListUpBulk, ListUpLinear, ListUpOutline, ListUpTwotone };
