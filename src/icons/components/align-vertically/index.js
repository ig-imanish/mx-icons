import AlignVerticallyBold from "./AlignVerticallyBold";
import AlignVerticallyBroken from "./AlignVerticallyBroken";
import AlignVerticallyBulk from "./AlignVerticallyBulk";
import AlignVerticallyLinear from "./AlignVerticallyLinear";
import AlignVerticallyOutline from "./AlignVerticallyOutline";
import AlignVerticallyTwotone from "./AlignVerticallyTwotone";

export { AlignVerticallyBold, AlignVerticallyBroken, AlignVerticallyBulk, AlignVerticallyLinear, AlignVerticallyOutline, AlignVerticallyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "align-vertically-bold",
    Component: AlignVerticallyBold,
    componentName: "AlignVerticallyBold",
  },
  {
    variant: "broken",
    slug: "align-vertically-broken",
    Component: AlignVerticallyBroken,
    componentName: "AlignVerticallyBroken",
  },
  {
    variant: "bulk",
    slug: "align-vertically-bulk",
    Component: AlignVerticallyBulk,
    componentName: "AlignVerticallyBulk",
  },
  {
    variant: "linear",
    slug: "align-vertically-linear",
    Component: AlignVerticallyLinear,
    componentName: "AlignVerticallyLinear",
  },
  {
    variant: "outline",
    slug: "align-vertically-outline",
    Component: AlignVerticallyOutline,
    componentName: "AlignVerticallyOutline",
  },
  {
    variant: "twotone",
    slug: "align-vertically-twotone",
    Component: AlignVerticallyTwotone,
    componentName: "AlignVerticallyTwotone",
  },
];
