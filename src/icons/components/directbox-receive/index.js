import DirectboxReceiveBold from "./DirectboxReceiveBold";
import DirectboxReceiveBroken from "./DirectboxReceiveBroken";
import DirectboxReceiveBulk from "./DirectboxReceiveBulk";
import DirectboxReceiveLinear from "./DirectboxReceiveLinear";
import DirectboxReceiveOutline from "./DirectboxReceiveOutline";
import DirectboxReceiveTwotone from "./DirectboxReceiveTwotone";

export { DirectboxReceiveBold, DirectboxReceiveBroken, DirectboxReceiveBulk, DirectboxReceiveLinear, DirectboxReceiveOutline, DirectboxReceiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "directbox-receive-bold",
    Component: DirectboxReceiveBold,
    componentName: "DirectboxReceiveBold",
  },
  {
    variant: "broken",
    slug: "directbox-receive-broken",
    Component: DirectboxReceiveBroken,
    componentName: "DirectboxReceiveBroken",
  },
  {
    variant: "bulk",
    slug: "directbox-receive-bulk",
    Component: DirectboxReceiveBulk,
    componentName: "DirectboxReceiveBulk",
  },
  {
    variant: "linear",
    slug: "directbox-receive-linear",
    Component: DirectboxReceiveLinear,
    componentName: "DirectboxReceiveLinear",
  },
  {
    variant: "outline",
    slug: "directbox-receive-outline",
    Component: DirectboxReceiveOutline,
    componentName: "DirectboxReceiveOutline",
  },
  {
    variant: "twotone",
    slug: "directbox-receive-twotone",
    Component: DirectboxReceiveTwotone,
    componentName: "DirectboxReceiveTwotone",
  },
];
