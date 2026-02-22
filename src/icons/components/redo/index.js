import RedoBold from "./RedoBold";
import RedoBroken from "./RedoBroken";
import RedoBulk from "./RedoBulk";
import RedoLinear from "./RedoLinear";
import RedoOutline from "./RedoOutline";
import RedoTwotone from "./RedoTwotone";

export { RedoBold, RedoBroken, RedoBulk, RedoLinear, RedoOutline, RedoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "redo-bold",
    Component: RedoBold,
    componentName: "RedoBold",
  },
  {
    variant: "broken",
    slug: "redo-broken",
    Component: RedoBroken,
    componentName: "RedoBroken",
  },
  {
    variant: "bulk",
    slug: "redo-bulk",
    Component: RedoBulk,
    componentName: "RedoBulk",
  },
  {
    variant: "linear",
    slug: "redo-linear",
    Component: RedoLinear,
    componentName: "RedoLinear",
  },
  {
    variant: "outline",
    slug: "redo-outline",
    Component: RedoOutline,
    componentName: "RedoOutline",
  },
  {
    variant: "twotone",
    slug: "redo-twotone",
    Component: RedoTwotone,
    componentName: "RedoTwotone",
  },
];
