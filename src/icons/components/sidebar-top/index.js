import SidebarTopBold from "./SidebarTopBold";
import SidebarTopBroken from "./SidebarTopBroken";
import SidebarTopBulk from "./SidebarTopBulk";
import SidebarTopLinear from "./SidebarTopLinear";
import SidebarTopOutline from "./SidebarTopOutline";
import SidebarTopTwotone from "./SidebarTopTwotone";

export { SidebarTopBold, SidebarTopBroken, SidebarTopBulk, SidebarTopLinear, SidebarTopOutline, SidebarTopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-top-bold",
    Component: SidebarTopBold,
    componentName: "SidebarTopBold",
  },
  {
    variant: "broken",
    slug: "sidebar-top-broken",
    Component: SidebarTopBroken,
    componentName: "SidebarTopBroken",
  },
  {
    variant: "bulk",
    slug: "sidebar-top-bulk",
    Component: SidebarTopBulk,
    componentName: "SidebarTopBulk",
  },
  {
    variant: "linear",
    slug: "sidebar-top-linear",
    Component: SidebarTopLinear,
    componentName: "SidebarTopLinear",
  },
  {
    variant: "outline",
    slug: "sidebar-top-outline",
    Component: SidebarTopOutline,
    componentName: "SidebarTopOutline",
  },
  {
    variant: "twotone",
    slug: "sidebar-top-twotone",
    Component: SidebarTopTwotone,
    componentName: "SidebarTopTwotone",
  },
];
