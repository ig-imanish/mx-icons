import RefreshBold from "./RefreshBold";
import RefreshBroken from "./RefreshBroken";
import RefreshBulk from "./RefreshBulk";
import RefreshLinear from "./RefreshLinear";
import RefreshOutline from "./RefreshOutline";
import RefreshTwotone from "./RefreshTwotone";

export { RefreshBold, RefreshBroken, RefreshBulk, RefreshLinear, RefreshOutline, RefreshTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "refresh-bold",
    Component: RefreshBold,
    componentName: "RefreshBold",
  },
  {
    variant: "broken",
    slug: "refresh-broken",
    Component: RefreshBroken,
    componentName: "RefreshBroken",
  },
  {
    variant: "bulk",
    slug: "refresh-bulk",
    Component: RefreshBulk,
    componentName: "RefreshBulk",
  },
  {
    variant: "linear",
    slug: "refresh-linear",
    Component: RefreshLinear,
    componentName: "RefreshLinear",
  },
  {
    variant: "outline",
    slug: "refresh-outline",
    Component: RefreshOutline,
    componentName: "RefreshOutline",
  },
  {
    variant: "twotone",
    slug: "refresh-twotone",
    Component: RefreshTwotone,
    componentName: "RefreshTwotone",
  },
];
