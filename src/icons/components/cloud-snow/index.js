import CloudSnowBold from "./CloudSnowBold";
import CloudSnowBroken from "./CloudSnowBroken";
import CloudSnowBulk from "./CloudSnowBulk";
import CloudSnowLinear from "./CloudSnowLinear";
import CloudSnowOutline from "./CloudSnowOutline";
import CloudSnowTwotone from "./CloudSnowTwotone";

export { CloudSnowBold, CloudSnowBroken, CloudSnowBulk, CloudSnowLinear, CloudSnowOutline, CloudSnowTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-snow-bold",
    Component: CloudSnowBold,
    componentName: "CloudSnowBold",
  },
  {
    variant: "broken",
    slug: "cloud-snow-broken",
    Component: CloudSnowBroken,
    componentName: "CloudSnowBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-snow-bulk",
    Component: CloudSnowBulk,
    componentName: "CloudSnowBulk",
  },
  {
    variant: "linear",
    slug: "cloud-snow-linear",
    Component: CloudSnowLinear,
    componentName: "CloudSnowLinear",
  },
  {
    variant: "outline",
    slug: "cloud-snow-outline",
    Component: CloudSnowOutline,
    componentName: "CloudSnowOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-snow-twotone",
    Component: CloudSnowTwotone,
    componentName: "CloudSnowTwotone",
  },
];
