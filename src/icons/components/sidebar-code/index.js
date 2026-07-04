import SidebarCodeBold from "./SidebarCodeBold";
import SidebarCodeBroken from "./SidebarCodeBroken";
import SidebarCodeBulk from "./SidebarCodeBulk";
import SidebarCodeLinear from "./SidebarCodeLinear";
import SidebarCodeOutline from "./SidebarCodeOutline";
import SidebarCodeTwotone from "./SidebarCodeTwotone";

export { SidebarCodeBold, SidebarCodeBroken, SidebarCodeBulk, SidebarCodeLinear, SidebarCodeOutline, SidebarCodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sidebar-code-bold",
    Component: SidebarCodeBold,
    componentName: "SidebarCodeBold",
  },,
  {
    variant: "broken",
    slug: "sidebar-code-broken",
    Component: SidebarCodeBroken,
    componentName: "SidebarCodeBroken",
  },,
  {
    variant: "bulk",
    slug: "sidebar-code-bulk",
    Component: SidebarCodeBulk,
    componentName: "SidebarCodeBulk",
  },,
  {
    variant: "linear",
    slug: "sidebar-code-linear",
    Component: SidebarCodeLinear,
    componentName: "SidebarCodeLinear",
  },,
  {
    variant: "outline",
    slug: "sidebar-code-outline",
    Component: SidebarCodeOutline,
    componentName: "SidebarCodeOutline",
  },,
  {
    variant: "twotone",
    slug: "sidebar-code-twotone",
    Component: SidebarCodeTwotone,
    componentName: "SidebarCodeTwotone",
  }
];

export default { SidebarCodeBold, SidebarCodeBroken, SidebarCodeBulk, SidebarCodeLinear, SidebarCodeOutline, SidebarCodeTwotone };
