import SidebarMinimalisticBold from "./SidebarMinimalisticBold";
import SidebarMinimalisticBroken from "./SidebarMinimalisticBroken";
import SidebarMinimalisticBulk from "./SidebarMinimalisticBulk";
import SidebarMinimalisticLinear from "./SidebarMinimalisticLinear";
import SidebarMinimalisticOutline from "./SidebarMinimalisticOutline";
import SidebarMinimalisticTwotone from "./SidebarMinimalisticTwotone";

export { SidebarMinimalisticBold, SidebarMinimalisticBroken, SidebarMinimalisticBulk, SidebarMinimalisticLinear, SidebarMinimalisticOutline, SidebarMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-minimalistic-bold",
    Component: SidebarMinimalisticBold,
    componentName: "SidebarMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "sidebar-minimalistic-broken",
    Component: SidebarMinimalisticBroken,
    componentName: "SidebarMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "sidebar-minimalistic-bulk",
    Component: SidebarMinimalisticBulk,
    componentName: "SidebarMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "sidebar-minimalistic-linear",
    Component: SidebarMinimalisticLinear,
    componentName: "SidebarMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "sidebar-minimalistic-outline",
    Component: SidebarMinimalisticOutline,
    componentName: "SidebarMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "sidebar-minimalistic-twotone",
    Component: SidebarMinimalisticTwotone,
    componentName: "SidebarMinimalisticTwotone",
  }
];

export default { SidebarMinimalisticBold, SidebarMinimalisticBroken, SidebarMinimalisticBulk, SidebarMinimalisticLinear, SidebarMinimalisticOutline, SidebarMinimalisticTwotone };
