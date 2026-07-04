import CloudStormBold from "./CloudStormBold";
import CloudStormBroken from "./CloudStormBroken";
import CloudStormBulk from "./CloudStormBulk";
import CloudStormLinear from "./CloudStormLinear";
import CloudStormOutline from "./CloudStormOutline";
import CloudStormTwotone from "./CloudStormTwotone";

export { CloudStormBold, CloudStormBroken, CloudStormBulk, CloudStormLinear, CloudStormOutline, CloudStormTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-storm-bold",
    Component: CloudStormBold,
    componentName: "CloudStormBold",
  },,
  {
    variant: "broken",
    slug: "cloud-storm-broken",
    Component: CloudStormBroken,
    componentName: "CloudStormBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-storm-bulk",
    Component: CloudStormBulk,
    componentName: "CloudStormBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-storm-linear",
    Component: CloudStormLinear,
    componentName: "CloudStormLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-storm-outline",
    Component: CloudStormOutline,
    componentName: "CloudStormOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-storm-twotone",
    Component: CloudStormTwotone,
    componentName: "CloudStormTwotone",
  }
];

export default { CloudStormBold, CloudStormBroken, CloudStormBulk, CloudStormLinear, CloudStormOutline, CloudStormTwotone };
