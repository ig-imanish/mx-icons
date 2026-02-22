import AddBold from "./AddBold";
import AddBroken from "./AddBroken";
import AddBulk from "./AddBulk";
import AddLinear from "./AddLinear";
import AddOutline from "./AddOutline";
import AddTwotone from "./AddTwotone";

export { AddBold, AddBroken, AddBulk, AddLinear, AddOutline, AddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "add-bold",
    Component: AddBold,
    componentName: "AddBold",
  },
  {
    variant: "broken",
    slug: "add-broken",
    Component: AddBroken,
    componentName: "AddBroken",
  },
  {
    variant: "bulk",
    slug: "add-bulk",
    Component: AddBulk,
    componentName: "AddBulk",
  },
  {
    variant: "linear",
    slug: "add-linear",
    Component: AddLinear,
    componentName: "AddLinear",
  },
  {
    variant: "outline",
    slug: "add-outline",
    Component: AddOutline,
    componentName: "AddOutline",
  },
  {
    variant: "twotone",
    slug: "add-twotone",
    Component: AddTwotone,
    componentName: "AddTwotone",
  },
];
