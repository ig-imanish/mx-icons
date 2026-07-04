import MenuDotsBold from "./MenuDotsBold";
import MenuDotsBroken from "./MenuDotsBroken";
import MenuDotsBulk from "./MenuDotsBulk";
import MenuDotsLinear from "./MenuDotsLinear";
import MenuDotsOutline from "./MenuDotsOutline";
import MenuDotsTwotone from "./MenuDotsTwotone";

export { MenuDotsBold, MenuDotsBroken, MenuDotsBulk, MenuDotsLinear, MenuDotsOutline, MenuDotsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "menu-dots-bold",
    Component: MenuDotsBold,
    componentName: "MenuDotsBold",
  },,
  {
    variant: "broken",
    slug: "menu-dots-broken",
    Component: MenuDotsBroken,
    componentName: "MenuDotsBroken",
  },,
  {
    variant: "bulk",
    slug: "menu-dots-bulk",
    Component: MenuDotsBulk,
    componentName: "MenuDotsBulk",
  },,
  {
    variant: "linear",
    slug: "menu-dots-linear",
    Component: MenuDotsLinear,
    componentName: "MenuDotsLinear",
  },,
  {
    variant: "outline",
    slug: "menu-dots-outline",
    Component: MenuDotsOutline,
    componentName: "MenuDotsOutline",
  },,
  {
    variant: "twotone",
    slug: "menu-dots-twotone",
    Component: MenuDotsTwotone,
    componentName: "MenuDotsTwotone",
  }
];

export default { MenuDotsBold, MenuDotsBroken, MenuDotsBulk, MenuDotsLinear, MenuDotsOutline, MenuDotsTwotone };
