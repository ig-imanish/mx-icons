import DropBold from "./DropBold";
import DropBroken from "./DropBroken";
import DropBulk from "./DropBulk";
import DropLinear from "./DropLinear";
import DropTwotone from "./DropTwotone";

export { DropBold, DropBroken, DropBulk, DropLinear, DropTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "drop-bold",
    Component: DropBold,
    componentName: "DropBold",
  },
  {
    variant: "broken",
    slug: "drop-broken",
    Component: DropBroken,
    componentName: "DropBroken",
  },
  {
    variant: "bulk",
    slug: "drop-bulk",
    Component: DropBulk,
    componentName: "DropBulk",
  },
  {
    variant: "linear",
    slug: "drop-linear",
    Component: DropLinear,
    componentName: "DropLinear",
  },
  {
    variant: "twotone",
    slug: "drop-twotone",
    Component: DropTwotone,
    componentName: "DropTwotone",
  },
];
