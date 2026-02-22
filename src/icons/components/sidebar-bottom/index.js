import SidebarBottomBold from "./SidebarBottomBold";
import SidebarBottomBroken from "./SidebarBottomBroken";
import SidebarBottomBulk from "./SidebarBottomBulk";
import SidebarBottomLinear from "./SidebarBottomLinear";
import SidebarBottomOutline from "./SidebarBottomOutline";
import SidebarBottomTwotone from "./SidebarBottomTwotone";

export { SidebarBottomBold, SidebarBottomBroken, SidebarBottomBulk, SidebarBottomLinear, SidebarBottomOutline, SidebarBottomTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-bottom-bold",
    Component: SidebarBottomBold,
    componentName: "SidebarBottomBold",
  },
  {
    variant: "broken",
    slug: "sidebar-bottom-broken",
    Component: SidebarBottomBroken,
    componentName: "SidebarBottomBroken",
  },
  {
    variant: "bulk",
    slug: "sidebar-bottom-bulk",
    Component: SidebarBottomBulk,
    componentName: "SidebarBottomBulk",
  },
  {
    variant: "linear",
    slug: "sidebar-bottom-linear",
    Component: SidebarBottomLinear,
    componentName: "SidebarBottomLinear",
  },
  {
    variant: "outline",
    slug: "sidebar-bottom-outline",
    Component: SidebarBottomOutline,
    componentName: "SidebarBottomOutline",
  },
  {
    variant: "twotone",
    slug: "sidebar-bottom-twotone",
    Component: SidebarBottomTwotone,
    componentName: "SidebarBottomTwotone",
  },
];
