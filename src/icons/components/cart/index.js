import CartBold from "./CartBold";
import CartBroken from "./CartBroken";
import CartBulk from "./CartBulk";
import CartLinear from "./CartLinear";
import CartOutline from "./CartOutline";
import CartTwotone from "./CartTwotone";

export { CartBold, CartBroken, CartBulk, CartLinear, CartOutline, CartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-bold",
    Component: CartBold,
    componentName: "CartBold",
  },,
  {
    variant: "broken",
    slug: "cart-broken",
    Component: CartBroken,
    componentName: "CartBroken",
  },,
  {
    variant: "bulk",
    slug: "cart-bulk",
    Component: CartBulk,
    componentName: "CartBulk",
  },,
  {
    variant: "linear",
    slug: "cart-linear",
    Component: CartLinear,
    componentName: "CartLinear",
  },,
  {
    variant: "outline",
    slug: "cart-outline",
    Component: CartOutline,
    componentName: "CartOutline",
  },,
  {
    variant: "twotone",
    slug: "cart-twotone",
    Component: CartTwotone,
    componentName: "CartTwotone",
  }
];

export default { CartBold, CartBroken, CartBulk, CartLinear, CartOutline, CartTwotone };
