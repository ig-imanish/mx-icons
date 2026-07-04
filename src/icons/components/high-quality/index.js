import HighQualityBold from "./HighQualityBold";
import HighQualityBroken from "./HighQualityBroken";
import HighQualityBulk from "./HighQualityBulk";
import HighQualityLinear from "./HighQualityLinear";
import HighQualityOutline from "./HighQualityOutline";
import HighQualityTwotone from "./HighQualityTwotone";

export { HighQualityBold, HighQualityBroken, HighQualityBulk, HighQualityLinear, HighQualityOutline, HighQualityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "high-quality-bold",
    Component: HighQualityBold,
    componentName: "HighQualityBold",
  },,
  {
    variant: "broken",
    slug: "high-quality-broken",
    Component: HighQualityBroken,
    componentName: "HighQualityBroken",
  },,
  {
    variant: "bulk",
    slug: "high-quality-bulk",
    Component: HighQualityBulk,
    componentName: "HighQualityBulk",
  },,
  {
    variant: "linear",
    slug: "high-quality-linear",
    Component: HighQualityLinear,
    componentName: "HighQualityLinear",
  },,
  {
    variant: "outline",
    slug: "high-quality-outline",
    Component: HighQualityOutline,
    componentName: "HighQualityOutline",
  },,
  {
    variant: "twotone",
    slug: "high-quality-twotone",
    Component: HighQualityTwotone,
    componentName: "HighQualityTwotone",
  }
];

export default { HighQualityBold, HighQualityBroken, HighQualityBulk, HighQualityLinear, HighQualityOutline, HighQualityTwotone };
