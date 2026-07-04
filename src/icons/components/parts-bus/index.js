import PartsBusBold from "./PartsBusBold";
import PartsBusBroken from "./PartsBusBroken";
import PartsBusBulk from "./PartsBusBulk";
import PartsBusLinear from "./PartsBusLinear";
import PartsBusOutline from "./PartsBusOutline";
import PartsBusTwotone from "./PartsBusTwotone";

export { PartsBusBold, PartsBusBroken, PartsBusBulk, PartsBusLinear, PartsBusOutline, PartsBusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "parts-bus-bold",
    Component: PartsBusBold,
    componentName: "PartsBusBold",
  },,
  {
    variant: "broken",
    slug: "parts-bus-broken",
    Component: PartsBusBroken,
    componentName: "PartsBusBroken",
  },,
  {
    variant: "bulk",
    slug: "parts-bus-bulk",
    Component: PartsBusBulk,
    componentName: "PartsBusBulk",
  },,
  {
    variant: "linear",
    slug: "parts-bus-linear",
    Component: PartsBusLinear,
    componentName: "PartsBusLinear",
  },,
  {
    variant: "outline",
    slug: "parts-bus-outline",
    Component: PartsBusOutline,
    componentName: "PartsBusOutline",
  },,
  {
    variant: "twotone",
    slug: "parts-bus-twotone",
    Component: PartsBusTwotone,
    componentName: "PartsBusTwotone",
  }
];

export default { PartsBusBold, PartsBusBroken, PartsBusBulk, PartsBusLinear, PartsBusOutline, PartsBusTwotone };
