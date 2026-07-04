import ListHeartBold from "./ListHeartBold";
import ListHeartBroken from "./ListHeartBroken";
import ListHeartBulk from "./ListHeartBulk";
import ListHeartLinear from "./ListHeartLinear";
import ListHeartOutline from "./ListHeartOutline";
import ListHeartTwotone from "./ListHeartTwotone";

export { ListHeartBold, ListHeartBroken, ListHeartBulk, ListHeartLinear, ListHeartOutline, ListHeartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "list-heart-bold",
    Component: ListHeartBold,
    componentName: "ListHeartBold",
  },,
  {
    variant: "broken",
    slug: "list-heart-broken",
    Component: ListHeartBroken,
    componentName: "ListHeartBroken",
  },,
  {
    variant: "bulk",
    slug: "list-heart-bulk",
    Component: ListHeartBulk,
    componentName: "ListHeartBulk",
  },,
  {
    variant: "linear",
    slug: "list-heart-linear",
    Component: ListHeartLinear,
    componentName: "ListHeartLinear",
  },,
  {
    variant: "outline",
    slug: "list-heart-outline",
    Component: ListHeartOutline,
    componentName: "ListHeartOutline",
  },,
  {
    variant: "twotone",
    slug: "list-heart-twotone",
    Component: ListHeartTwotone,
    componentName: "ListHeartTwotone",
  }
];

export default { ListHeartBold, ListHeartBroken, ListHeartBulk, ListHeartLinear, ListHeartOutline, ListHeartTwotone };
