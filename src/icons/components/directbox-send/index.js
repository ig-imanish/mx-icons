import DirectboxSendBold from "./DirectboxSendBold";
import DirectboxSendBroken from "./DirectboxSendBroken";
import DirectboxSendBulk from "./DirectboxSendBulk";
import DirectboxSendLinear from "./DirectboxSendLinear";
import DirectboxSendOutline from "./DirectboxSendOutline";
import DirectboxSendTwotone from "./DirectboxSendTwotone";

export { DirectboxSendBold, DirectboxSendBroken, DirectboxSendBulk, DirectboxSendLinear, DirectboxSendOutline, DirectboxSendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "directbox-send-bold",
    Component: DirectboxSendBold,
    componentName: "DirectboxSendBold",
  },
  {
    variant: "broken",
    slug: "directbox-send-broken",
    Component: DirectboxSendBroken,
    componentName: "DirectboxSendBroken",
  },
  {
    variant: "bulk",
    slug: "directbox-send-bulk",
    Component: DirectboxSendBulk,
    componentName: "DirectboxSendBulk",
  },
  {
    variant: "linear",
    slug: "directbox-send-linear",
    Component: DirectboxSendLinear,
    componentName: "DirectboxSendLinear",
  },
  {
    variant: "outline",
    slug: "directbox-send-outline",
    Component: DirectboxSendOutline,
    componentName: "DirectboxSendOutline",
  },
  {
    variant: "twotone",
    slug: "directbox-send-twotone",
    Component: DirectboxSendTwotone,
    componentName: "DirectboxSendTwotone",
  },
];
