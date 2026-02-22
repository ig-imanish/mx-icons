import SliderBold from "./SliderBold";
import SliderBroken from "./SliderBroken";
import SliderBulk from "./SliderBulk";
import SliderLinear from "./SliderLinear";
import SliderOutline from "./SliderOutline";
import SliderTwotone from "./SliderTwotone";

export { SliderBold, SliderBroken, SliderBulk, SliderLinear, SliderOutline, SliderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "slider-bold",
    Component: SliderBold,
    componentName: "SliderBold",
  },
  {
    variant: "broken",
    slug: "slider-broken",
    Component: SliderBroken,
    componentName: "SliderBroken",
  },
  {
    variant: "bulk",
    slug: "slider-bulk",
    Component: SliderBulk,
    componentName: "SliderBulk",
  },
  {
    variant: "linear",
    slug: "slider-linear",
    Component: SliderLinear,
    componentName: "SliderLinear",
  },
  {
    variant: "outline",
    slug: "slider-outline",
    Component: SliderOutline,
    componentName: "SliderOutline",
  },
  {
    variant: "twotone",
    slug: "slider-twotone",
    Component: SliderTwotone,
    componentName: "SliderTwotone",
  },
];
