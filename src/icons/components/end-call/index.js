import EndCallBold from "./EndCallBold";
import EndCallBroken from "./EndCallBroken";
import EndCallBulk from "./EndCallBulk";
import EndCallLinear from "./EndCallLinear";
import EndCallOutline from "./EndCallOutline";
import EndCallTwotone from "./EndCallTwotone";

export { EndCallBold, EndCallBroken, EndCallBulk, EndCallLinear, EndCallOutline, EndCallTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "end-call-bold",
    Component: EndCallBold,
    componentName: "EndCallBold",
  },,
  {
    variant: "broken",
    slug: "end-call-broken",
    Component: EndCallBroken,
    componentName: "EndCallBroken",
  },,
  {
    variant: "bulk",
    slug: "end-call-bulk",
    Component: EndCallBulk,
    componentName: "EndCallBulk",
  },,
  {
    variant: "linear",
    slug: "end-call-linear",
    Component: EndCallLinear,
    componentName: "EndCallLinear",
  },,
  {
    variant: "outline",
    slug: "end-call-outline",
    Component: EndCallOutline,
    componentName: "EndCallOutline",
  },,
  {
    variant: "twotone",
    slug: "end-call-twotone",
    Component: EndCallTwotone,
    componentName: "EndCallTwotone",
  }
];

export default { EndCallBold, EndCallBroken, EndCallBulk, EndCallLinear, EndCallOutline, EndCallTwotone };
