import SdCardBold from "./SdCardBold";
import SdCardBroken from "./SdCardBroken";
import SdCardBulk from "./SdCardBulk";
import SdCardLinear from "./SdCardLinear";
import SdCardOutline from "./SdCardOutline";
import SdCardTwotone from "./SdCardTwotone";

export { SdCardBold, SdCardBroken, SdCardBulk, SdCardLinear, SdCardOutline, SdCardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sd-card-bold",
    Component: SdCardBold,
    componentName: "SdCardBold",
  },,
  {
    variant: "broken",
    slug: "sd-card-broken",
    Component: SdCardBroken,
    componentName: "SdCardBroken",
  },,
  {
    variant: "bulk",
    slug: "sd-card-bulk",
    Component: SdCardBulk,
    componentName: "SdCardBulk",
  },,
  {
    variant: "linear",
    slug: "sd-card-linear",
    Component: SdCardLinear,
    componentName: "SdCardLinear",
  },,
  {
    variant: "outline",
    slug: "sd-card-outline",
    Component: SdCardOutline,
    componentName: "SdCardOutline",
  },,
  {
    variant: "twotone",
    slug: "sd-card-twotone",
    Component: SdCardTwotone,
    componentName: "SdCardTwotone",
  }
];

export default { SdCardBold, SdCardBroken, SdCardBulk, SdCardLinear, SdCardOutline, SdCardTwotone };
