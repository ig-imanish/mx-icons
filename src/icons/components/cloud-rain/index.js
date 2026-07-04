import CloudRainBold from "./CloudRainBold";
import CloudRainBroken from "./CloudRainBroken";
import CloudRainBulk from "./CloudRainBulk";
import CloudRainLinear from "./CloudRainLinear";
import CloudRainOutline from "./CloudRainOutline";
import CloudRainTwotone from "./CloudRainTwotone";

export { CloudRainBold, CloudRainBroken, CloudRainBulk, CloudRainLinear, CloudRainOutline, CloudRainTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-rain-bold",
    Component: CloudRainBold,
    componentName: "CloudRainBold",
  },,
  {
    variant: "broken",
    slug: "cloud-rain-broken",
    Component: CloudRainBroken,
    componentName: "CloudRainBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-rain-bulk",
    Component: CloudRainBulk,
    componentName: "CloudRainBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-rain-linear",
    Component: CloudRainLinear,
    componentName: "CloudRainLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-rain-outline",
    Component: CloudRainOutline,
    componentName: "CloudRainOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-rain-twotone",
    Component: CloudRainTwotone,
    componentName: "CloudRainTwotone",
  }
];

export default { CloudRainBold, CloudRainBroken, CloudRainBulk, CloudRainLinear, CloudRainOutline, CloudRainTwotone };
