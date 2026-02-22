import SliderHorizontalBold from "./SliderHorizontalBold";
import SliderHorizontalBroken from "./SliderHorizontalBroken";
import SliderHorizontalBulk from "./SliderHorizontalBulk";
import SliderHorizontalLinear from "./SliderHorizontalLinear";
import SliderHorizontalOutline from "./SliderHorizontalOutline";
import SliderHorizontalTwotone from "./SliderHorizontalTwotone";

export { SliderHorizontalBold, SliderHorizontalBroken, SliderHorizontalBulk, SliderHorizontalLinear, SliderHorizontalOutline, SliderHorizontalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "slider-horizontal-bold",
    Component: SliderHorizontalBold,
    componentName: "SliderHorizontalBold",
  },
  {
    variant: "broken",
    slug: "slider-horizontal-broken",
    Component: SliderHorizontalBroken,
    componentName: "SliderHorizontalBroken",
  },
  {
    variant: "bulk",
    slug: "slider-horizontal-bulk",
    Component: SliderHorizontalBulk,
    componentName: "SliderHorizontalBulk",
  },
  {
    variant: "linear",
    slug: "slider-horizontal-linear",
    Component: SliderHorizontalLinear,
    componentName: "SliderHorizontalLinear",
  },
  {
    variant: "outline",
    slug: "slider-horizontal-outline",
    Component: SliderHorizontalOutline,
    componentName: "SliderHorizontalOutline",
  },
  {
    variant: "twotone",
    slug: "slider-horizontal-twotone",
    Component: SliderHorizontalTwotone,
    componentName: "SliderHorizontalTwotone",
  },
];
