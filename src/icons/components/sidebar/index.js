import SidebarBold from "./SidebarBold";
import SidebarBroken from "./SidebarBroken";
import SidebarBulk from "./SidebarBulk";
import SidebarLinear from "./SidebarLinear";
import SidebarOutline from "./SidebarOutline";
import SidebarTwotone from "./SidebarTwotone";

export { SidebarBold, SidebarBroken, SidebarBulk, SidebarLinear, SidebarOutline, SidebarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-bold",
    Component: SidebarBold,
    componentName: "SidebarBold",
  },,
  {
    variant: "broken",
    slug: "sidebar-broken",
    Component: SidebarBroken,
    componentName: "SidebarBroken",
  },,
  {
    variant: "bulk",
    slug: "sidebar-bulk",
    Component: SidebarBulk,
    componentName: "SidebarBulk",
  },,
  {
    variant: "linear",
    slug: "sidebar-linear",
    Component: SidebarLinear,
    componentName: "SidebarLinear",
  },,
  {
    variant: "outline",
    slug: "sidebar-outline",
    Component: SidebarOutline,
    componentName: "SidebarOutline",
  },,
  {
    variant: "twotone",
    slug: "sidebar-twotone",
    Component: SidebarTwotone,
    componentName: "SidebarTwotone",
  }
];

export default { SidebarBold, SidebarBroken, SidebarBulk, SidebarLinear, SidebarOutline, SidebarTwotone };
