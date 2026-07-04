import CloudBoltBold from "./CloudBoltBold";
import CloudBoltBroken from "./CloudBoltBroken";
import CloudBoltBulk from "./CloudBoltBulk";
import CloudBoltLinear from "./CloudBoltLinear";
import CloudBoltOutline from "./CloudBoltOutline";
import CloudBoltTwotone from "./CloudBoltTwotone";

export { CloudBoltBold, CloudBoltBroken, CloudBoltBulk, CloudBoltLinear, CloudBoltOutline, CloudBoltTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-bolt-bold",
    Component: CloudBoltBold,
    componentName: "CloudBoltBold",
  },,
  {
    variant: "broken",
    slug: "cloud-bolt-broken",
    Component: CloudBoltBroken,
    componentName: "CloudBoltBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-bolt-bulk",
    Component: CloudBoltBulk,
    componentName: "CloudBoltBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-bolt-linear",
    Component: CloudBoltLinear,
    componentName: "CloudBoltLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-bolt-outline",
    Component: CloudBoltOutline,
    componentName: "CloudBoltOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-bolt-twotone",
    Component: CloudBoltTwotone,
    componentName: "CloudBoltTwotone",
  }
];

export default { CloudBoltBold, CloudBoltBroken, CloudBoltBulk, CloudBoltLinear, CloudBoltOutline, CloudBoltTwotone };
