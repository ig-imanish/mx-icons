import SliderVerticalBold from "./SliderVerticalBold";
import SliderVerticalBroken from "./SliderVerticalBroken";
import SliderVerticalBulk from "./SliderVerticalBulk";
import SliderVerticalLinear from "./SliderVerticalLinear";
import SliderVerticalOutline from "./SliderVerticalOutline";
import SliderVerticalTwotone from "./SliderVerticalTwotone";

export { SliderVerticalBold, SliderVerticalBroken, SliderVerticalBulk, SliderVerticalLinear, SliderVerticalOutline, SliderVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "slider-vertical-bold",
    Component: SliderVerticalBold,
    componentName: "SliderVerticalBold",
  },
  {
    variant: "broken",
    slug: "slider-vertical-broken",
    Component: SliderVerticalBroken,
    componentName: "SliderVerticalBroken",
  },
  {
    variant: "bulk",
    slug: "slider-vertical-bulk",
    Component: SliderVerticalBulk,
    componentName: "SliderVerticalBulk",
  },
  {
    variant: "linear",
    slug: "slider-vertical-linear",
    Component: SliderVerticalLinear,
    componentName: "SliderVerticalLinear",
  },
  {
    variant: "outline",
    slug: "slider-vertical-outline",
    Component: SliderVerticalOutline,
    componentName: "SliderVerticalOutline",
  },
  {
    variant: "twotone",
    slug: "slider-vertical-twotone",
    Component: SliderVerticalTwotone,
    componentName: "SliderVerticalTwotone",
  },
];
