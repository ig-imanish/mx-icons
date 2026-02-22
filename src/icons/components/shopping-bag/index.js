import ShoppingBagBold from "./ShoppingBagBold";
import ShoppingBagBroken from "./ShoppingBagBroken";
import ShoppingBagBulk from "./ShoppingBagBulk";
import ShoppingBagLinear from "./ShoppingBagLinear";
import ShoppingBagOutline from "./ShoppingBagOutline";
import ShoppingBagTwotone from "./ShoppingBagTwotone";

export { ShoppingBagBold, ShoppingBagBroken, ShoppingBagBulk, ShoppingBagLinear, ShoppingBagOutline, ShoppingBagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shopping-bag-bold",
    Component: ShoppingBagBold,
    componentName: "ShoppingBagBold",
  },
  {
    variant: "broken",
    slug: "shopping-bag-broken",
    Component: ShoppingBagBroken,
    componentName: "ShoppingBagBroken",
  },
  {
    variant: "bulk",
    slug: "shopping-bag-bulk",
    Component: ShoppingBagBulk,
    componentName: "ShoppingBagBulk",
  },
  {
    variant: "linear",
    slug: "shopping-bag-linear",
    Component: ShoppingBagLinear,
    componentName: "ShoppingBagLinear",
  },
  {
    variant: "outline",
    slug: "shopping-bag-outline",
    Component: ShoppingBagOutline,
    componentName: "ShoppingBagOutline",
  },
  {
    variant: "twotone",
    slug: "shopping-bag-twotone",
    Component: ShoppingBagTwotone,
    componentName: "ShoppingBagTwotone",
  },
];
