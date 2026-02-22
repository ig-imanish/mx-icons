import AdditemBold from "./AdditemBold";
import AdditemBroken from "./AdditemBroken";
import AdditemBulk from "./AdditemBulk";
import AdditemLinear from "./AdditemLinear";
import AdditemOutline from "./AdditemOutline";
import AdditemTwotone from "./AdditemTwotone";

export { AdditemBold, AdditemBroken, AdditemBulk, AdditemLinear, AdditemOutline, AdditemTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "additem-bold",
    Component: AdditemBold,
    componentName: "AdditemBold",
  },
  {
    variant: "broken",
    slug: "additem-broken",
    Component: AdditemBroken,
    componentName: "AdditemBroken",
  },
  {
    variant: "bulk",
    slug: "additem-bulk",
    Component: AdditemBulk,
    componentName: "AdditemBulk",
  },
  {
    variant: "linear",
    slug: "additem-linear",
    Component: AdditemLinear,
    componentName: "AdditemLinear",
  },
  {
    variant: "outline",
    slug: "additem-outline",
    Component: AdditemOutline,
    componentName: "AdditemOutline",
  },
  {
    variant: "twotone",
    slug: "additem-twotone",
    Component: AdditemTwotone,
    componentName: "AdditemTwotone",
  },
];
