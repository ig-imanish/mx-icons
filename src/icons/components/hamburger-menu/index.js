import HamburgerMenuBold from "./HamburgerMenuBold";
import HamburgerMenuBroken from "./HamburgerMenuBroken";
import HamburgerMenuBulk from "./HamburgerMenuBulk";
import HamburgerMenuLinear from "./HamburgerMenuLinear";
import HamburgerMenuOutline from "./HamburgerMenuOutline";
import HamburgerMenuTwotone from "./HamburgerMenuTwotone";

export { HamburgerMenuBold, HamburgerMenuBroken, HamburgerMenuBulk, HamburgerMenuLinear, HamburgerMenuOutline, HamburgerMenuTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hamburger-menu-bold",
    Component: HamburgerMenuBold,
    componentName: "HamburgerMenuBold",
  },,
  {
    variant: "broken",
    slug: "hamburger-menu-broken",
    Component: HamburgerMenuBroken,
    componentName: "HamburgerMenuBroken",
  },,
  {
    variant: "bulk",
    slug: "hamburger-menu-bulk",
    Component: HamburgerMenuBulk,
    componentName: "HamburgerMenuBulk",
  },,
  {
    variant: "linear",
    slug: "hamburger-menu-linear",
    Component: HamburgerMenuLinear,
    componentName: "HamburgerMenuLinear",
  },,
  {
    variant: "outline",
    slug: "hamburger-menu-outline",
    Component: HamburgerMenuOutline,
    componentName: "HamburgerMenuOutline",
  },,
  {
    variant: "twotone",
    slug: "hamburger-menu-twotone",
    Component: HamburgerMenuTwotone,
    componentName: "HamburgerMenuTwotone",
  }
];

export default { HamburgerMenuBold, HamburgerMenuBroken, HamburgerMenuBulk, HamburgerMenuLinear, HamburgerMenuOutline, HamburgerMenuTwotone };
