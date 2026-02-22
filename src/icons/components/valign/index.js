import ValignBaseline from "./ValignBaseline";
import ValignBaselineTwotone from "./ValignBaselineTwotone";
import ValignBottom from "./ValignBottom";
import ValignBottomTwotone from "./ValignBottomTwotone";
import ValignMiddle from "./ValignMiddle";
import ValignMiddleTwotone from "./ValignMiddleTwotone";
import ValignTop from "./ValignTop";
import ValignTopTwotone from "./ValignTopTwotone";

export { ValignBaseline, ValignBaselineTwotone, ValignBottom, ValignBottomTwotone, ValignMiddle, ValignMiddleTwotone, ValignTop, ValignTopTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "valign-baseline",
    Component: ValignBaseline,
    componentName: "ValignBaseline",
  },
  {
    variant: "twotone",
    slug: "valign-baseline-twotone",
    Component: ValignBaselineTwotone,
    componentName: "ValignBaselineTwotone",
  },
  {
    variant: "linear",
    slug: "valign-bottom",
    Component: ValignBottom,
    componentName: "ValignBottom",
  },
  {
    variant: "twotone",
    slug: "valign-bottom-twotone",
    Component: ValignBottomTwotone,
    componentName: "ValignBottomTwotone",
  },
  {
    variant: "linear",
    slug: "valign-middle",
    Component: ValignMiddle,
    componentName: "ValignMiddle",
  },
  {
    variant: "twotone",
    slug: "valign-middle-twotone",
    Component: ValignMiddleTwotone,
    componentName: "ValignMiddleTwotone",
  },
  {
    variant: "linear",
    slug: "valign-top",
    Component: ValignTop,
    componentName: "ValignTop",
  },
  {
    variant: "twotone",
    slug: "valign-top-twotone",
    Component: ValignTopTwotone,
    componentName: "ValignTopTwotone",
  },
];
