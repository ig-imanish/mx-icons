import DeliveryBold from "./DeliveryBold";
import DeliveryBroken from "./DeliveryBroken";
import DeliveryBulk from "./DeliveryBulk";
import DeliveryLinear from "./DeliveryLinear";
import DeliveryOutline from "./DeliveryOutline";
import DeliveryTwotone from "./DeliveryTwotone";

export { DeliveryBold, DeliveryBroken, DeliveryBulk, DeliveryLinear, DeliveryOutline, DeliveryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "delivery-bold",
    Component: DeliveryBold,
    componentName: "DeliveryBold",
  },,
  {
    variant: "broken",
    slug: "delivery-broken",
    Component: DeliveryBroken,
    componentName: "DeliveryBroken",
  },,
  {
    variant: "bulk",
    slug: "delivery-bulk",
    Component: DeliveryBulk,
    componentName: "DeliveryBulk",
  },,
  {
    variant: "linear",
    slug: "delivery-linear",
    Component: DeliveryLinear,
    componentName: "DeliveryLinear",
  },,
  {
    variant: "outline",
    slug: "delivery-outline",
    Component: DeliveryOutline,
    componentName: "DeliveryOutline",
  },,
  {
    variant: "twotone",
    slug: "delivery-twotone",
    Component: DeliveryTwotone,
    componentName: "DeliveryTwotone",
  }
];

export default { DeliveryBold, DeliveryBroken, DeliveryBulk, DeliveryLinear, DeliveryOutline, DeliveryTwotone };
