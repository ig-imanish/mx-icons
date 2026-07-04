import TuningBold from "./TuningBold";
import TuningBroken from "./TuningBroken";
import TuningBulk from "./TuningBulk";
import TuningLinear from "./TuningLinear";
import TuningOutline from "./TuningOutline";
import TuningTwotone from "./TuningTwotone";

export { TuningBold, TuningBroken, TuningBulk, TuningLinear, TuningOutline, TuningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tuning-bold",
    Component: TuningBold,
    componentName: "TuningBold",
  },,
  {
    variant: "broken",
    slug: "tuning-broken",
    Component: TuningBroken,
    componentName: "TuningBroken",
  },,
  {
    variant: "bulk",
    slug: "tuning-bulk",
    Component: TuningBulk,
    componentName: "TuningBulk",
  },,
  {
    variant: "linear",
    slug: "tuning-linear",
    Component: TuningLinear,
    componentName: "TuningLinear",
  },,
  {
    variant: "outline",
    slug: "tuning-outline",
    Component: TuningOutline,
    componentName: "TuningOutline",
  },,
  {
    variant: "twotone",
    slug: "tuning-twotone",
    Component: TuningTwotone,
    componentName: "TuningTwotone",
  }
];

export default { TuningBold, TuningBroken, TuningBulk, TuningLinear, TuningOutline, TuningTwotone };
