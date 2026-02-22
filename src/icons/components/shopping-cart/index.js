import ShoppingCartBold from "./ShoppingCartBold";
import ShoppingCartBroken from "./ShoppingCartBroken";
import ShoppingCartBulk from "./ShoppingCartBulk";
import ShoppingCartLinear from "./ShoppingCartLinear";
import ShoppingCartOutline from "./ShoppingCartOutline";
import ShoppingCartTwotone from "./ShoppingCartTwotone";

export { ShoppingCartBold, ShoppingCartBroken, ShoppingCartBulk, ShoppingCartLinear, ShoppingCartOutline, ShoppingCartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shopping-cart-bold",
    Component: ShoppingCartBold,
    componentName: "ShoppingCartBold",
  },
  {
    variant: "broken",
    slug: "shopping-cart-broken",
    Component: ShoppingCartBroken,
    componentName: "ShoppingCartBroken",
  },
  {
    variant: "bulk",
    slug: "shopping-cart-bulk",
    Component: ShoppingCartBulk,
    componentName: "ShoppingCartBulk",
  },
  {
    variant: "linear",
    slug: "shopping-cart-linear",
    Component: ShoppingCartLinear,
    componentName: "ShoppingCartLinear",
  },
  {
    variant: "outline",
    slug: "shopping-cart-outline",
    Component: ShoppingCartOutline,
    componentName: "ShoppingCartOutline",
  },
  {
    variant: "twotone",
    slug: "shopping-cart-twotone",
    Component: ShoppingCartTwotone,
    componentName: "ShoppingCartTwotone",
  },
];
