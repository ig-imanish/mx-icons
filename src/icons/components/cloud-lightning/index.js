import CloudLightningBold from "./CloudLightningBold";
import CloudLightningBroken from "./CloudLightningBroken";
import CloudLightningBulk from "./CloudLightningBulk";
import CloudLightningLinear from "./CloudLightningLinear";
import CloudLightningOutline from "./CloudLightningOutline";
import CloudLightningTwotone from "./CloudLightningTwotone";

export { CloudLightningBold, CloudLightningBroken, CloudLightningBulk, CloudLightningLinear, CloudLightningOutline, CloudLightningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-lightning-bold",
    Component: CloudLightningBold,
    componentName: "CloudLightningBold",
  },
  {
    variant: "broken",
    slug: "cloud-lightning-broken",
    Component: CloudLightningBroken,
    componentName: "CloudLightningBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-lightning-bulk",
    Component: CloudLightningBulk,
    componentName: "CloudLightningBulk",
  },
  {
    variant: "linear",
    slug: "cloud-lightning-linear",
    Component: CloudLightningLinear,
    componentName: "CloudLightningLinear",
  },
  {
    variant: "outline",
    slug: "cloud-lightning-outline",
    Component: CloudLightningOutline,
    componentName: "CloudLightningOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-lightning-twotone",
    Component: CloudLightningTwotone,
    componentName: "CloudLightningTwotone",
  },
];
