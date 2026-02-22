import AutobrightnessBold from "./AutobrightnessBold";
import AutobrightnessBroken from "./AutobrightnessBroken";
import AutobrightnessBulk from "./AutobrightnessBulk";
import AutobrightnessLinear from "./AutobrightnessLinear";
import AutobrightnessOutline from "./AutobrightnessOutline";
import AutobrightnessTwotone from "./AutobrightnessTwotone";

export { AutobrightnessBold, AutobrightnessBroken, AutobrightnessBulk, AutobrightnessLinear, AutobrightnessOutline, AutobrightnessTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "autobrightness-bold",
    Component: AutobrightnessBold,
    componentName: "AutobrightnessBold",
  },
  {
    variant: "broken",
    slug: "autobrightness-broken",
    Component: AutobrightnessBroken,
    componentName: "AutobrightnessBroken",
  },
  {
    variant: "bulk",
    slug: "autobrightness-bulk",
    Component: AutobrightnessBulk,
    componentName: "AutobrightnessBulk",
  },
  {
    variant: "linear",
    slug: "autobrightness-linear",
    Component: AutobrightnessLinear,
    componentName: "AutobrightnessLinear",
  },
  {
    variant: "outline",
    slug: "autobrightness-outline",
    Component: AutobrightnessOutline,
    componentName: "AutobrightnessOutline",
  },
  {
    variant: "twotone",
    slug: "autobrightness-twotone",
    Component: AutobrightnessTwotone,
    componentName: "AutobrightnessTwotone",
  },
];
