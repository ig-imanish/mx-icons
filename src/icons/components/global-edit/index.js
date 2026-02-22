import GlobalEditBold from "./GlobalEditBold";
import GlobalEditBroken from "./GlobalEditBroken";
import GlobalEditBulk from "./GlobalEditBulk";
import GlobalEditLinear from "./GlobalEditLinear";
import GlobalEditOutline from "./GlobalEditOutline";
import GlobalEditTwotone from "./GlobalEditTwotone";

export { GlobalEditBold, GlobalEditBroken, GlobalEditBulk, GlobalEditLinear, GlobalEditOutline, GlobalEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "global-edit-bold",
    Component: GlobalEditBold,
    componentName: "GlobalEditBold",
  },
  {
    variant: "broken",
    slug: "global-edit-broken",
    Component: GlobalEditBroken,
    componentName: "GlobalEditBroken",
  },
  {
    variant: "bulk",
    slug: "global-edit-bulk",
    Component: GlobalEditBulk,
    componentName: "GlobalEditBulk",
  },
  {
    variant: "linear",
    slug: "global-edit-linear",
    Component: GlobalEditLinear,
    componentName: "GlobalEditLinear",
  },
  {
    variant: "outline",
    slug: "global-edit-outline",
    Component: GlobalEditOutline,
    componentName: "GlobalEditOutline",
  },
  {
    variant: "twotone",
    slug: "global-edit-twotone",
    Component: GlobalEditTwotone,
    componentName: "GlobalEditTwotone",
  },
];
