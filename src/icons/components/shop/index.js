import ShopBold from "./ShopBold";
import ShopBroken from "./ShopBroken";
import ShopBulk from "./ShopBulk";
import ShopLinear from "./ShopLinear";
import ShopOutline from "./ShopOutline";
import ShopTwotone from "./ShopTwotone";

export { ShopBold, ShopBroken, ShopBulk, ShopLinear, ShopOutline, ShopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shop-bold",
    Component: ShopBold,
    componentName: "ShopBold",
  },
  {
    variant: "broken",
    slug: "shop-broken",
    Component: ShopBroken,
    componentName: "ShopBroken",
  },
  {
    variant: "bulk",
    slug: "shop-bulk",
    Component: ShopBulk,
    componentName: "ShopBulk",
  },
  {
    variant: "linear",
    slug: "shop-linear",
    Component: ShopLinear,
    componentName: "ShopLinear",
  },
  {
    variant: "outline",
    slug: "shop-outline",
    Component: ShopOutline,
    componentName: "ShopOutline",
  },
  {
    variant: "twotone",
    slug: "shop-twotone",
    Component: ShopTwotone,
    componentName: "ShopTwotone",
  },
];
