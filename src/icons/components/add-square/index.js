import AddSquareBold from "./AddSquareBold";
import AddSquareBroken from "./AddSquareBroken";
import AddSquareBulk from "./AddSquareBulk";
import AddSquareLinear from "./AddSquareLinear";
import AddSquareOutline from "./AddSquareOutline";
import AddSquareTwotone from "./AddSquareTwotone";

export { AddSquareBold, AddSquareBroken, AddSquareBulk, AddSquareLinear, AddSquareOutline, AddSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "add-square-bold",
    Component: AddSquareBold,
    componentName: "AddSquareBold",
  },
  {
    variant: "broken",
    slug: "add-square-broken",
    Component: AddSquareBroken,
    componentName: "AddSquareBroken",
  },
  {
    variant: "bulk",
    slug: "add-square-bulk",
    Component: AddSquareBulk,
    componentName: "AddSquareBulk",
  },
  {
    variant: "linear",
    slug: "add-square-linear",
    Component: AddSquareLinear,
    componentName: "AddSquareLinear",
  },
  {
    variant: "outline",
    slug: "add-square-outline",
    Component: AddSquareOutline,
    componentName: "AddSquareOutline",
  },
  {
    variant: "twotone",
    slug: "add-square-twotone",
    Component: AddSquareTwotone,
    componentName: "AddSquareTwotone",
  },
];
