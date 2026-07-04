import TrafficBold from "./TrafficBold";
import TrafficBroken from "./TrafficBroken";
import TrafficBulk from "./TrafficBulk";
import TrafficLinear from "./TrafficLinear";
import TrafficOutline from "./TrafficOutline";
import TrafficTwotone from "./TrafficTwotone";

export { TrafficBold, TrafficBroken, TrafficBulk, TrafficLinear, TrafficOutline, TrafficTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "traffic-bold",
    Component: TrafficBold,
    componentName: "TrafficBold",
  },,
  {
    variant: "broken",
    slug: "traffic-broken",
    Component: TrafficBroken,
    componentName: "TrafficBroken",
  },,
  {
    variant: "bulk",
    slug: "traffic-bulk",
    Component: TrafficBulk,
    componentName: "TrafficBulk",
  },,
  {
    variant: "linear",
    slug: "traffic-linear",
    Component: TrafficLinear,
    componentName: "TrafficLinear",
  },,
  {
    variant: "outline",
    slug: "traffic-outline",
    Component: TrafficOutline,
    componentName: "TrafficOutline",
  },,
  {
    variant: "twotone",
    slug: "traffic-twotone",
    Component: TrafficTwotone,
    componentName: "TrafficTwotone",
  }
];

export default { TrafficBold, TrafficBroken, TrafficBulk, TrafficLinear, TrafficOutline, TrafficTwotone };
