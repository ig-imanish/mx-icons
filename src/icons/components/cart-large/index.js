import CartLargeBold from "./CartLargeBold";
import CartLargeBroken from "./CartLargeBroken";
import CartLargeBulk from "./CartLargeBulk";
import CartLargeLinear from "./CartLargeLinear";
import CartLargeOutline from "./CartLargeOutline";
import CartLargeTwotone from "./CartLargeTwotone";

export { CartLargeBold, CartLargeBroken, CartLargeBulk, CartLargeLinear, CartLargeOutline, CartLargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-large-bold",
    Component: CartLargeBold,
    componentName: "CartLargeBold",
  },,
  {
    variant: "broken",
    slug: "cart-large-broken",
    Component: CartLargeBroken,
    componentName: "CartLargeBroken",
  },,
  {
    variant: "bulk",
    slug: "cart-large-bulk",
    Component: CartLargeBulk,
    componentName: "CartLargeBulk",
  },,
  {
    variant: "linear",
    slug: "cart-large-linear",
    Component: CartLargeLinear,
    componentName: "CartLargeLinear",
  },,
  {
    variant: "outline",
    slug: "cart-large-outline",
    Component: CartLargeOutline,
    componentName: "CartLargeOutline",
  },,
  {
    variant: "twotone",
    slug: "cart-large-twotone",
    Component: CartLargeTwotone,
    componentName: "CartLargeTwotone",
  }
];

export default { CartLargeBold, CartLargeBroken, CartLargeBulk, CartLargeLinear, CartLargeOutline, CartLargeTwotone };
