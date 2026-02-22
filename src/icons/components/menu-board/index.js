import MenuBoardBold from "./MenuBoardBold";
import MenuBoardBroken from "./MenuBoardBroken";
import MenuBoardBulk from "./MenuBoardBulk";
import MenuBoardLinear from "./MenuBoardLinear";
import MenuBoardOutline from "./MenuBoardOutline";
import MenuBoardTwotone from "./MenuBoardTwotone";

export { MenuBoardBold, MenuBoardBroken, MenuBoardBulk, MenuBoardLinear, MenuBoardOutline, MenuBoardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "menu-board-bold",
    Component: MenuBoardBold,
    componentName: "MenuBoardBold",
  },
  {
    variant: "broken",
    slug: "menu-board-broken",
    Component: MenuBoardBroken,
    componentName: "MenuBoardBroken",
  },
  {
    variant: "bulk",
    slug: "menu-board-bulk",
    Component: MenuBoardBulk,
    componentName: "MenuBoardBulk",
  },
  {
    variant: "linear",
    slug: "menu-board-linear",
    Component: MenuBoardLinear,
    componentName: "MenuBoardLinear",
  },
  {
    variant: "outline",
    slug: "menu-board-outline",
    Component: MenuBoardOutline,
    componentName: "MenuBoardOutline",
  },
  {
    variant: "twotone",
    slug: "menu-board-twotone",
    Component: MenuBoardTwotone,
    componentName: "MenuBoardTwotone",
  },
];
