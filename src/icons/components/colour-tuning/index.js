import ColourTuningBold from "./ColourTuningBold";
import ColourTuningBroken from "./ColourTuningBroken";
import ColourTuningBulk from "./ColourTuningBulk";
import ColourTuningLinear from "./ColourTuningLinear";
import ColourTuningOutline from "./ColourTuningOutline";
import ColourTuningTwotone from "./ColourTuningTwotone";

export { ColourTuningBold, ColourTuningBroken, ColourTuningBulk, ColourTuningLinear, ColourTuningOutline, ColourTuningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "colour-tuning-bold",
    Component: ColourTuningBold,
    componentName: "ColourTuningBold",
  },,
  {
    variant: "broken",
    slug: "colour-tuning-broken",
    Component: ColourTuningBroken,
    componentName: "ColourTuningBroken",
  },,
  {
    variant: "bulk",
    slug: "colour-tuning-bulk",
    Component: ColourTuningBulk,
    componentName: "ColourTuningBulk",
  },,
  {
    variant: "linear",
    slug: "colour-tuning-linear",
    Component: ColourTuningLinear,
    componentName: "ColourTuningLinear",
  },,
  {
    variant: "outline",
    slug: "colour-tuning-outline",
    Component: ColourTuningOutline,
    componentName: "ColourTuningOutline",
  },,
  {
    variant: "twotone",
    slug: "colour-tuning-twotone",
    Component: ColourTuningTwotone,
    componentName: "ColourTuningTwotone",
  }
];

export default { ColourTuningBold, ColourTuningBroken, ColourTuningBulk, ColourTuningLinear, ColourTuningOutline, ColourTuningTwotone };
