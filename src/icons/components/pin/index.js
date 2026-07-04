import PinBold from "./PinBold";
import PinBroken from "./PinBroken";
import PinBulk from "./PinBulk";
import PinLinear from "./PinLinear";
import PinOutline from "./PinOutline";
import PinTwotone from "./PinTwotone";

export { PinBold, PinBroken, PinBulk, PinLinear, PinOutline, PinTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pin-bold",
    Component: PinBold,
    componentName: "PinBold",
  },,
  {
    variant: "broken",
    slug: "pin-broken",
    Component: PinBroken,
    componentName: "PinBroken",
  },,
  {
    variant: "bulk",
    slug: "pin-bulk",
    Component: PinBulk,
    componentName: "PinBulk",
  },,
  {
    variant: "linear",
    slug: "pin-linear",
    Component: PinLinear,
    componentName: "PinLinear",
  },,
  {
    variant: "outline",
    slug: "pin-outline",
    Component: PinOutline,
    componentName: "PinOutline",
  },,
  {
    variant: "twotone",
    slug: "pin-twotone",
    Component: PinTwotone,
    componentName: "PinTwotone",
  }
];

export default { PinBold, PinBroken, PinBulk, PinLinear, PinOutline, PinTwotone };
