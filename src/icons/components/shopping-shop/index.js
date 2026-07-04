import ShoppingShopBold from "./ShoppingShopBold";
import ShoppingShopBroken from "./ShoppingShopBroken";
import ShoppingShopBulk from "./ShoppingShopBulk";
import ShoppingShopLinear from "./ShoppingShopLinear";
import ShoppingShopOutline from "./ShoppingShopOutline";
import ShoppingShopTwotone from "./ShoppingShopTwotone";

export { ShoppingShopBold, ShoppingShopBroken, ShoppingShopBulk, ShoppingShopLinear, ShoppingShopOutline, ShoppingShopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shopping-shop-bold",
    Component: ShoppingShopBold,
    componentName: "ShoppingShopBold",
  },,
  {
    variant: "broken",
    slug: "shopping-shop-broken",
    Component: ShoppingShopBroken,
    componentName: "ShoppingShopBroken",
  },,
  {
    variant: "bulk",
    slug: "shopping-shop-bulk",
    Component: ShoppingShopBulk,
    componentName: "ShoppingShopBulk",
  },,
  {
    variant: "linear",
    slug: "shopping-shop-linear",
    Component: ShoppingShopLinear,
    componentName: "ShoppingShopLinear",
  },,
  {
    variant: "outline",
    slug: "shopping-shop-outline",
    Component: ShoppingShopOutline,
    componentName: "ShoppingShopOutline",
  },,
  {
    variant: "twotone",
    slug: "shopping-shop-twotone",
    Component: ShoppingShopTwotone,
    componentName: "ShoppingShopTwotone",
  }
];

export default { ShoppingShopBold, ShoppingShopBroken, ShoppingShopBulk, ShoppingShopLinear, ShoppingShopOutline, ShoppingShopTwotone };
