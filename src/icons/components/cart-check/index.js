import CartCheckBold from "./CartCheckBold";
import CartCheckBroken from "./CartCheckBroken";
import CartCheckBulk from "./CartCheckBulk";
import CartCheckLinear from "./CartCheckLinear";
import CartCheckOutline from "./CartCheckOutline";
import CartCheckTwotone from "./CartCheckTwotone";

export { CartCheckBold, CartCheckBroken, CartCheckBulk, CartCheckLinear, CartCheckOutline, CartCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-check-bold",
    Component: CartCheckBold,
    componentName: "CartCheckBold",
  },,
  {
    variant: "broken",
    slug: "cart-check-broken",
    Component: CartCheckBroken,
    componentName: "CartCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "cart-check-bulk",
    Component: CartCheckBulk,
    componentName: "CartCheckBulk",
  },,
  {
    variant: "linear",
    slug: "cart-check-linear",
    Component: CartCheckLinear,
    componentName: "CartCheckLinear",
  },,
  {
    variant: "outline",
    slug: "cart-check-outline",
    Component: CartCheckOutline,
    componentName: "CartCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "cart-check-twotone",
    Component: CartCheckTwotone,
    componentName: "CartCheckTwotone",
  }
];

export default { CartCheckBold, CartCheckBroken, CartCheckBulk, CartCheckLinear, CartCheckOutline, CartCheckTwotone };
