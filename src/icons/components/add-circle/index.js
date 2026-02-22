import AddCircleBold from "./AddCircleBold";
import AddCircleBroken from "./AddCircleBroken";
import AddCircleBulk from "./AddCircleBulk";
import AddCircleLinear from "./AddCircleLinear";
import AddCircleOutline from "./AddCircleOutline";
import AddCircleTwotone from "./AddCircleTwotone";

export { AddCircleBold, AddCircleBroken, AddCircleBulk, AddCircleLinear, AddCircleOutline, AddCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "add-circle-bold",
    Component: AddCircleBold,
    componentName: "AddCircleBold",
  },
  {
    variant: "broken",
    slug: "add-circle-broken",
    Component: AddCircleBroken,
    componentName: "AddCircleBroken",
  },
  {
    variant: "bulk",
    slug: "add-circle-bulk",
    Component: AddCircleBulk,
    componentName: "AddCircleBulk",
  },
  {
    variant: "linear",
    slug: "add-circle-linear",
    Component: AddCircleLinear,
    componentName: "AddCircleLinear",
  },
  {
    variant: "outline",
    slug: "add-circle-outline",
    Component: AddCircleOutline,
    componentName: "AddCircleOutline",
  },
  {
    variant: "twotone",
    slug: "add-circle-twotone",
    Component: AddCircleTwotone,
    componentName: "AddCircleTwotone",
  },
];
