import HandHeartBold from "./HandHeartBold";
import HandHeartBroken from "./HandHeartBroken";
import HandHeartBulk from "./HandHeartBulk";
import HandHeartLinear from "./HandHeartLinear";
import HandHeartOutline from "./HandHeartOutline";
import HandHeartTwotone from "./HandHeartTwotone";

export { HandHeartBold, HandHeartBroken, HandHeartBulk, HandHeartLinear, HandHeartOutline, HandHeartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hand-heart-bold",
    Component: HandHeartBold,
    componentName: "HandHeartBold",
  },,
  {
    variant: "broken",
    slug: "hand-heart-broken",
    Component: HandHeartBroken,
    componentName: "HandHeartBroken",
  },,
  {
    variant: "bulk",
    slug: "hand-heart-bulk",
    Component: HandHeartBulk,
    componentName: "HandHeartBulk",
  },,
  {
    variant: "linear",
    slug: "hand-heart-linear",
    Component: HandHeartLinear,
    componentName: "HandHeartLinear",
  },,
  {
    variant: "outline",
    slug: "hand-heart-outline",
    Component: HandHeartOutline,
    componentName: "HandHeartOutline",
  },,
  {
    variant: "twotone",
    slug: "hand-heart-twotone",
    Component: HandHeartTwotone,
    componentName: "HandHeartTwotone",
  }
];

export default { HandHeartBold, HandHeartBroken, HandHeartBulk, HandHeartLinear, HandHeartOutline, HandHeartTwotone };
