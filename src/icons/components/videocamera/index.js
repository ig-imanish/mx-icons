import VideocameraBold from "./VideocameraBold";
import VideocameraBroken from "./VideocameraBroken";
import VideocameraBulk from "./VideocameraBulk";
import VideocameraLinear from "./VideocameraLinear";
import VideocameraOutline from "./VideocameraOutline";
import VideocameraTwotone from "./VideocameraTwotone";

export { VideocameraBold, VideocameraBroken, VideocameraBulk, VideocameraLinear, VideocameraOutline, VideocameraTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "videocamera-bold",
    Component: VideocameraBold,
    componentName: "VideocameraBold",
  },,
  {
    variant: "broken",
    slug: "videocamera-broken",
    Component: VideocameraBroken,
    componentName: "VideocameraBroken",
  },,
  {
    variant: "bulk",
    slug: "videocamera-bulk",
    Component: VideocameraBulk,
    componentName: "VideocameraBulk",
  },,
  {
    variant: "linear",
    slug: "videocamera-linear",
    Component: VideocameraLinear,
    componentName: "VideocameraLinear",
  },,
  {
    variant: "outline",
    slug: "videocamera-outline",
    Component: VideocameraOutline,
    componentName: "VideocameraOutline",
  },,
  {
    variant: "twotone",
    slug: "videocamera-twotone",
    Component: VideocameraTwotone,
    componentName: "VideocameraTwotone",
  }
];

export default { VideocameraBold, VideocameraBroken, VideocameraBulk, VideocameraLinear, VideocameraOutline, VideocameraTwotone };
