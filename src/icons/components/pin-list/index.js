import PinListBold from "./PinListBold";
import PinListBroken from "./PinListBroken";
import PinListBulk from "./PinListBulk";
import PinListLinear from "./PinListLinear";
import PinListOutline from "./PinListOutline";
import PinListTwotone from "./PinListTwotone";

export { PinListBold, PinListBroken, PinListBulk, PinListLinear, PinListOutline, PinListTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pin-list-bold",
    Component: PinListBold,
    componentName: "PinListBold",
  },,
  {
    variant: "broken",
    slug: "pin-list-broken",
    Component: PinListBroken,
    componentName: "PinListBroken",
  },,
  {
    variant: "bulk",
    slug: "pin-list-bulk",
    Component: PinListBulk,
    componentName: "PinListBulk",
  },,
  {
    variant: "linear",
    slug: "pin-list-linear",
    Component: PinListLinear,
    componentName: "PinListLinear",
  },,
  {
    variant: "outline",
    slug: "pin-list-outline",
    Component: PinListOutline,
    componentName: "PinListOutline",
  },,
  {
    variant: "twotone",
    slug: "pin-list-twotone",
    Component: PinListTwotone,
    componentName: "PinListTwotone",
  }
];

export default { PinListBold, PinListBroken, PinListBulk, PinListLinear, PinListOutline, PinListTwotone };
