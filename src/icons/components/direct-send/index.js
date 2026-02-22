import DirectSendBold from "./DirectSendBold";
import DirectSendBroken from "./DirectSendBroken";
import DirectSendBulk from "./DirectSendBulk";
import DirectSendLinear from "./DirectSendLinear";
import DirectSendOutline from "./DirectSendOutline";
import DirectSendTwotone from "./DirectSendTwotone";

export { DirectSendBold, DirectSendBroken, DirectSendBulk, DirectSendLinear, DirectSendOutline, DirectSendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-send-bold",
    Component: DirectSendBold,
    componentName: "DirectSendBold",
  },
  {
    variant: "broken",
    slug: "direct-send-broken",
    Component: DirectSendBroken,
    componentName: "DirectSendBroken",
  },
  {
    variant: "bulk",
    slug: "direct-send-bulk",
    Component: DirectSendBulk,
    componentName: "DirectSendBulk",
  },
  {
    variant: "linear",
    slug: "direct-send-linear",
    Component: DirectSendLinear,
    componentName: "DirectSendLinear",
  },
  {
    variant: "outline",
    slug: "direct-send-outline",
    Component: DirectSendOutline,
    componentName: "DirectSendOutline",
  },
  {
    variant: "twotone",
    slug: "direct-send-twotone",
    Component: DirectSendTwotone,
    componentName: "DirectSendTwotone",
  },
];
