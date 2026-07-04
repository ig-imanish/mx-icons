import CartCrossBold from "./CartCrossBold";
import CartCrossBroken from "./CartCrossBroken";
import CartCrossBulk from "./CartCrossBulk";
import CartCrossLinear from "./CartCrossLinear";
import CartCrossOutline from "./CartCrossOutline";
import CartCrossTwotone from "./CartCrossTwotone";

export { CartCrossBold, CartCrossBroken, CartCrossBulk, CartCrossLinear, CartCrossOutline, CartCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-cross-bold",
    Component: CartCrossBold,
    componentName: "CartCrossBold",
  },,
  {
    variant: "broken",
    slug: "cart-cross-broken",
    Component: CartCrossBroken,
    componentName: "CartCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "cart-cross-bulk",
    Component: CartCrossBulk,
    componentName: "CartCrossBulk",
  },,
  {
    variant: "linear",
    slug: "cart-cross-linear",
    Component: CartCrossLinear,
    componentName: "CartCrossLinear",
  },,
  {
    variant: "outline",
    slug: "cart-cross-outline",
    Component: CartCrossOutline,
    componentName: "CartCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "cart-cross-twotone",
    Component: CartCrossTwotone,
    componentName: "CartCrossTwotone",
  }
];

export default { CartCrossBold, CartCrossBroken, CartCrossBulk, CartCrossLinear, CartCrossOutline, CartCrossTwotone };
