import SidebarRightBold from "./SidebarRightBold";
import SidebarRightBroken from "./SidebarRightBroken";
import SidebarRightBulk from "./SidebarRightBulk";
import SidebarRightLinear from "./SidebarRightLinear";
import SidebarRightOutline from "./SidebarRightOutline";
import SidebarRightTwotone from "./SidebarRightTwotone";

export { SidebarRightBold, SidebarRightBroken, SidebarRightBulk, SidebarRightLinear, SidebarRightOutline, SidebarRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-right-bold",
    Component: SidebarRightBold,
    componentName: "SidebarRightBold",
  },
  {
    variant: "broken",
    slug: "sidebar-right-broken",
    Component: SidebarRightBroken,
    componentName: "SidebarRightBroken",
  },
  {
    variant: "bulk",
    slug: "sidebar-right-bulk",
    Component: SidebarRightBulk,
    componentName: "SidebarRightBulk",
  },
  {
    variant: "linear",
    slug: "sidebar-right-linear",
    Component: SidebarRightLinear,
    componentName: "SidebarRightLinear",
  },
  {
    variant: "outline",
    slug: "sidebar-right-outline",
    Component: SidebarRightOutline,
    componentName: "SidebarRightOutline",
  },
  {
    variant: "twotone",
    slug: "sidebar-right-twotone",
    Component: SidebarRightTwotone,
    componentName: "SidebarRightTwotone",
  },
];
