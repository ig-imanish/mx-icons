import CloudFogBold from "./CloudFogBold";
import CloudFogBroken from "./CloudFogBroken";
import CloudFogBulk from "./CloudFogBulk";
import CloudFogLinear from "./CloudFogLinear";
import CloudFogOutline from "./CloudFogOutline";
import CloudFogTwotone from "./CloudFogTwotone";

export { CloudFogBold, CloudFogBroken, CloudFogBulk, CloudFogLinear, CloudFogOutline, CloudFogTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-fog-bold",
    Component: CloudFogBold,
    componentName: "CloudFogBold",
  },
  {
    variant: "broken",
    slug: "cloud-fog-broken",
    Component: CloudFogBroken,
    componentName: "CloudFogBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-fog-bulk",
    Component: CloudFogBulk,
    componentName: "CloudFogBulk",
  },
  {
    variant: "linear",
    slug: "cloud-fog-linear",
    Component: CloudFogLinear,
    componentName: "CloudFogLinear",
  },
  {
    variant: "outline",
    slug: "cloud-fog-outline",
    Component: CloudFogOutline,
    componentName: "CloudFogOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-fog-twotone",
    Component: CloudFogTwotone,
    componentName: "CloudFogTwotone",
  },
];
