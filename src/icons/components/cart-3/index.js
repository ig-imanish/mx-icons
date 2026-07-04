import Cart3Bold from "./Cart3Bold";
import Cart3Broken from "./Cart3Broken";
import Cart3Bulk from "./Cart3Bulk";
import Cart3Linear from "./Cart3Linear";
import Cart3Outline from "./Cart3Outline";
import Cart3Twotone from "./Cart3Twotone";

export { Cart3Bold, Cart3Broken, Cart3Bulk, Cart3Linear, Cart3Outline, Cart3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "cart-3-bold",
    Component: Cart3Bold,
    componentName: "Cart3Bold",
  },,
  {
    variant: "broken",
    slug: "cart-3-broken",
    Component: Cart3Broken,
    componentName: "Cart3Broken",
  },,
  {
    variant: "bulk",
    slug: "cart-3-bulk",
    Component: Cart3Bulk,
    componentName: "Cart3Bulk",
  },,
  {
    variant: "linear",
    slug: "cart-3-linear",
    Component: Cart3Linear,
    componentName: "Cart3Linear",
  },,
  {
    variant: "outline",
    slug: "cart-3-outline",
    Component: Cart3Outline,
    componentName: "Cart3Outline",
  },,
  {
    variant: "twotone",
    slug: "cart-3-twotone",
    Component: Cart3Twotone,
    componentName: "Cart3Twotone",
  }
];

export default { Cart3Bold, Cart3Broken, Cart3Bulk, Cart3Linear, Cart3Outline, Cart3Twotone };
