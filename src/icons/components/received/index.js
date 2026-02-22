import ReceivedBold from "./ReceivedBold";
import ReceivedBroken from "./ReceivedBroken";
import ReceivedBulk from "./ReceivedBulk";
import ReceivedLinear from "./ReceivedLinear";
import ReceivedOutline from "./ReceivedOutline";
import ReceivedTwotone from "./ReceivedTwotone";

export { ReceivedBold, ReceivedBroken, ReceivedBulk, ReceivedLinear, ReceivedOutline, ReceivedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "received-bold",
    Component: ReceivedBold,
    componentName: "ReceivedBold",
  },
  {
    variant: "broken",
    slug: "received-broken",
    Component: ReceivedBroken,
    componentName: "ReceivedBroken",
  },
  {
    variant: "bulk",
    slug: "received-bulk",
    Component: ReceivedBulk,
    componentName: "ReceivedBulk",
  },
  {
    variant: "linear",
    slug: "received-linear",
    Component: ReceivedLinear,
    componentName: "ReceivedLinear",
  },
  {
    variant: "outline",
    slug: "received-outline",
    Component: ReceivedOutline,
    componentName: "ReceivedOutline",
  },
  {
    variant: "twotone",
    slug: "received-twotone",
    Component: ReceivedTwotone,
    componentName: "ReceivedTwotone",
  },
];
