import Cart2Bold from "./Cart2Bold";
import Cart2Broken from "./Cart2Broken";
import Cart2Bulk from "./Cart2Bulk";
import Cart2Linear from "./Cart2Linear";
import Cart2Outline from "./Cart2Outline";
import Cart2Twotone from "./Cart2Twotone";

export { Cart2Bold, Cart2Broken, Cart2Bulk, Cart2Linear, Cart2Outline, Cart2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-2-bold",
    Component: Cart2Bold,
    componentName: "Cart2Bold",
  },,
  {
    variant: "broken",
    slug: "cart-2-broken",
    Component: Cart2Broken,
    componentName: "Cart2Broken",
  },,
  {
    variant: "bulk",
    slug: "cart-2-bulk",
    Component: Cart2Bulk,
    componentName: "Cart2Bulk",
  },,
  {
    variant: "linear",
    slug: "cart-2-linear",
    Component: Cart2Linear,
    componentName: "Cart2Linear",
  },,
  {
    variant: "outline",
    slug: "cart-2-outline",
    Component: Cart2Outline,
    componentName: "Cart2Outline",
  },,
  {
    variant: "twotone",
    slug: "cart-2-twotone",
    Component: Cart2Twotone,
    componentName: "Cart2Twotone",
  }
];

export default { Cart2Bold, Cart2Broken, Cart2Bulk, Cart2Linear, Cart2Outline, Cart2Twotone };
