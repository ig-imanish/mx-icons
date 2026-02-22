import RotateLeftBold from "./RotateLeftBold";
import RotateLeftBroken from "./RotateLeftBroken";
import RotateLeftBulk from "./RotateLeftBulk";
import RotateLeftLinear from "./RotateLeftLinear";
import RotateLeftOutline from "./RotateLeftOutline";
import RotateLeftTwotone from "./RotateLeftTwotone";

export { RotateLeftBold, RotateLeftBroken, RotateLeftBulk, RotateLeftLinear, RotateLeftOutline, RotateLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rotate-left-bold",
    Component: RotateLeftBold,
    componentName: "RotateLeftBold",
  },
  {
    variant: "broken",
    slug: "rotate-left-broken",
    Component: RotateLeftBroken,
    componentName: "RotateLeftBroken",
  },
  {
    variant: "bulk",
    slug: "rotate-left-bulk",
    Component: RotateLeftBulk,
    componentName: "RotateLeftBulk",
  },
  {
    variant: "linear",
    slug: "rotate-left-linear",
    Component: RotateLeftLinear,
    componentName: "RotateLeftLinear",
  },
  {
    variant: "outline",
    slug: "rotate-left-outline",
    Component: RotateLeftOutline,
    componentName: "RotateLeftOutline",
  },
  {
    variant: "twotone",
    slug: "rotate-left-twotone",
    Component: RotateLeftTwotone,
    componentName: "RotateLeftTwotone",
  },
];
