import LightningBold from "./LightningBold";
import LightningBroken from "./LightningBroken";
import LightningBulk from "./LightningBulk";
import LightningLinear from "./LightningLinear";
import LightningOutline from "./LightningOutline";
import LightningTwotone from "./LightningTwotone";

export { LightningBold, LightningBroken, LightningBulk, LightningLinear, LightningOutline, LightningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lightning-bold",
    Component: LightningBold,
    componentName: "LightningBold",
  },,
  {
    variant: "broken",
    slug: "lightning-broken",
    Component: LightningBroken,
    componentName: "LightningBroken",
  },,
  {
    variant: "bulk",
    slug: "lightning-bulk",
    Component: LightningBulk,
    componentName: "LightningBulk",
  },,
  {
    variant: "linear",
    slug: "lightning-linear",
    Component: LightningLinear,
    componentName: "LightningLinear",
  },,
  {
    variant: "outline",
    slug: "lightning-outline",
    Component: LightningOutline,
    componentName: "LightningOutline",
  },,
  {
    variant: "twotone",
    slug: "lightning-twotone",
    Component: LightningTwotone,
    componentName: "LightningTwotone",
  }
];

export default { LightningBold, LightningBroken, LightningBulk, LightningLinear, LightningOutline, LightningTwotone };
