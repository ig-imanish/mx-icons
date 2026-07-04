import CloudCheckBold from "./CloudCheckBold";
import CloudCheckBroken from "./CloudCheckBroken";
import CloudCheckBulk from "./CloudCheckBulk";
import CloudCheckLinear from "./CloudCheckLinear";
import CloudCheckOutline from "./CloudCheckOutline";
import CloudCheckTwotone from "./CloudCheckTwotone";

export { CloudCheckBold, CloudCheckBroken, CloudCheckBulk, CloudCheckLinear, CloudCheckOutline, CloudCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-check-bold",
    Component: CloudCheckBold,
    componentName: "CloudCheckBold",
  },,
  {
    variant: "broken",
    slug: "cloud-check-broken",
    Component: CloudCheckBroken,
    componentName: "CloudCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "cloud-check-bulk",
    Component: CloudCheckBulk,
    componentName: "CloudCheckBulk",
  },,
  {
    variant: "linear",
    slug: "cloud-check-linear",
    Component: CloudCheckLinear,
    componentName: "CloudCheckLinear",
  },,
  {
    variant: "outline",
    slug: "cloud-check-outline",
    Component: CloudCheckOutline,
    componentName: "CloudCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "cloud-check-twotone",
    Component: CloudCheckTwotone,
    componentName: "CloudCheckTwotone",
  }
];

export default { CloudCheckBold, CloudCheckBroken, CloudCheckBulk, CloudCheckLinear, CloudCheckOutline, CloudCheckTwotone };
