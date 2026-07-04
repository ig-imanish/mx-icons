import CursorBold from "./CursorBold";
import CursorBroken from "./CursorBroken";
import CursorBulk from "./CursorBulk";
import CursorLinear from "./CursorLinear";
import CursorOutline from "./CursorOutline";
import CursorTwotone from "./CursorTwotone";

export { CursorBold, CursorBroken, CursorBulk, CursorLinear, CursorOutline, CursorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cursor-bold",
    Component: CursorBold,
    componentName: "CursorBold",
  },,
  {
    variant: "broken",
    slug: "cursor-broken",
    Component: CursorBroken,
    componentName: "CursorBroken",
  },,
  {
    variant: "bulk",
    slug: "cursor-bulk",
    Component: CursorBulk,
    componentName: "CursorBulk",
  },,
  {
    variant: "linear",
    slug: "cursor-linear",
    Component: CursorLinear,
    componentName: "CursorLinear",
  },,
  {
    variant: "outline",
    slug: "cursor-outline",
    Component: CursorOutline,
    componentName: "CursorOutline",
  },,
  {
    variant: "twotone",
    slug: "cursor-twotone",
    Component: CursorTwotone,
    componentName: "CursorTwotone",
  }
];

export default { CursorBold, CursorBroken, CursorBulk, CursorLinear, CursorOutline, CursorTwotone };
