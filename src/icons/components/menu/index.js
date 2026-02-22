import MenuBold from "./MenuBold";
import MenuBroken from "./MenuBroken";
import MenuBulk from "./MenuBulk";
import MenuFoldLeft from "./MenuFoldLeft";
import MenuFoldRight from "./MenuFoldRight";
import MenuLinear from "./MenuLinear";
import MenuOutline from "./MenuOutline";
import MenuToCloseAltTransition from "./MenuToCloseAltTransition";
import MenuToCloseTransition from "./MenuToCloseTransition";
import MenuTwotone from "./MenuTwotone";
import MenuUnfoldLeft from "./MenuUnfoldLeft";
import MenuUnfoldRight from "./MenuUnfoldRight";

export { MenuBold, MenuBroken, MenuBulk, MenuFoldLeft, MenuFoldRight, MenuLinear, MenuOutline, MenuToCloseAltTransition, MenuToCloseTransition, MenuTwotone, MenuUnfoldLeft, MenuUnfoldRight };

export const variants = [
  {
    variant: "bold",
    slug: "menu-bold",
    Component: MenuBold,
    componentName: "MenuBold",
  },
  {
    variant: "broken",
    slug: "menu-broken",
    Component: MenuBroken,
    componentName: "MenuBroken",
  },
  {
    variant: "bulk",
    slug: "menu-bulk",
    Component: MenuBulk,
    componentName: "MenuBulk",
  },
  {
    variant: "linear",
    slug: "menu-fold-left",
    Component: MenuFoldLeft,
    componentName: "MenuFoldLeft",
  },
  {
    variant: "linear",
    slug: "menu-fold-right",
    Component: MenuFoldRight,
    componentName: "MenuFoldRight",
  },
  {
    variant: "linear",
    slug: "menu-linear",
    Component: MenuLinear,
    componentName: "MenuLinear",
  },
  {
    variant: "outline",
    slug: "menu-outline",
    Component: MenuOutline,
    componentName: "MenuOutline",
  },
  {
    variant: "linear",
    slug: "menu-to-close-alt-transition",
    Component: MenuToCloseAltTransition,
    componentName: "MenuToCloseAltTransition",
  },
  {
    variant: "linear",
    slug: "menu-to-close-transition",
    Component: MenuToCloseTransition,
    componentName: "MenuToCloseTransition",
  },
  {
    variant: "twotone",
    slug: "menu-twotone",
    Component: MenuTwotone,
    componentName: "MenuTwotone",
  },
  {
    variant: "linear",
    slug: "menu-unfold-left",
    Component: MenuUnfoldLeft,
    componentName: "MenuUnfoldLeft",
  },
  {
    variant: "linear",
    slug: "menu-unfold-right",
    Component: MenuUnfoldRight,
    componentName: "MenuUnfoldRight",
  },
];
