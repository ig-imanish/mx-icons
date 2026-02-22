import SidebarLeftBold from "./SidebarLeftBold";
import SidebarLeftBroken from "./SidebarLeftBroken";
import SidebarLeftBulk from "./SidebarLeftBulk";
import SidebarLeftLinear from "./SidebarLeftLinear";
import SidebarLeftOutline from "./SidebarLeftOutline";
import SidebarLeftTwotone from "./SidebarLeftTwotone";

export { SidebarLeftBold, SidebarLeftBroken, SidebarLeftBulk, SidebarLeftLinear, SidebarLeftOutline, SidebarLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-left-bold",
    Component: SidebarLeftBold,
    componentName: "SidebarLeftBold",
  },
  {
    variant: "broken",
    slug: "sidebar-left-broken",
    Component: SidebarLeftBroken,
    componentName: "SidebarLeftBroken",
  },
  {
    variant: "bulk",
    slug: "sidebar-left-bulk",
    Component: SidebarLeftBulk,
    componentName: "SidebarLeftBulk",
  },
  {
    variant: "linear",
    slug: "sidebar-left-linear",
    Component: SidebarLeftLinear,
    componentName: "SidebarLeftLinear",
  },
  {
    variant: "outline",
    slug: "sidebar-left-outline",
    Component: SidebarLeftOutline,
    componentName: "SidebarLeftOutline",
  },
  {
    variant: "twotone",
    slug: "sidebar-left-twotone",
    Component: SidebarLeftTwotone,
    componentName: "SidebarLeftTwotone",
  },
];
