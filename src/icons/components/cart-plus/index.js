import CartPlusBold from "./CartPlusBold";
import CartPlusBroken from "./CartPlusBroken";
import CartPlusBulk from "./CartPlusBulk";
import CartPlusLinear from "./CartPlusLinear";
import CartPlusOutline from "./CartPlusOutline";
import CartPlusTwotone from "./CartPlusTwotone";

export { CartPlusBold, CartPlusBroken, CartPlusBulk, CartPlusLinear, CartPlusOutline, CartPlusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-plus-bold",
    Component: CartPlusBold,
    componentName: "CartPlusBold",
  },,
  {
    variant: "broken",
    slug: "cart-plus-broken",
    Component: CartPlusBroken,
    componentName: "CartPlusBroken",
  },,
  {
    variant: "bulk",
    slug: "cart-plus-bulk",
    Component: CartPlusBulk,
    componentName: "CartPlusBulk",
  },,
  {
    variant: "linear",
    slug: "cart-plus-linear",
    Component: CartPlusLinear,
    componentName: "CartPlusLinear",
  },,
  {
    variant: "outline",
    slug: "cart-plus-outline",
    Component: CartPlusOutline,
    componentName: "CartPlusOutline",
  },,
  {
    variant: "twotone",
    slug: "cart-plus-twotone",
    Component: CartPlusTwotone,
    componentName: "CartPlusTwotone",
  }
];

export default { CartPlusBold, CartPlusBroken, CartPlusBulk, CartPlusLinear, CartPlusOutline, CartPlusTwotone };
