import ManBold from "./ManBold";
import ManBroken from "./ManBroken";
import ManBulk from "./ManBulk";
import ManLinear from "./ManLinear";
import ManOutline from "./ManOutline";
import ManTwotone from "./ManTwotone";

export { ManBold, ManBroken, ManBulk, ManLinear, ManOutline, ManTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "man-bold",
    Component: ManBold,
    componentName: "ManBold",
  },
  {
    variant: "broken",
    slug: "man-broken",
    Component: ManBroken,
    componentName: "ManBroken",
  },
  {
    variant: "bulk",
    slug: "man-bulk",
    Component: ManBulk,
    componentName: "ManBulk",
  },
  {
    variant: "linear",
    slug: "man-linear",
    Component: ManLinear,
    componentName: "ManLinear",
  },
  {
    variant: "outline",
    slug: "man-outline",
    Component: ManOutline,
    componentName: "ManOutline",
  },
  {
    variant: "twotone",
    slug: "man-twotone",
    Component: ManTwotone,
    componentName: "ManTwotone",
  },
];
