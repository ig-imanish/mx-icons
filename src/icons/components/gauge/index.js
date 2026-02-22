import GaugeEmpty from "./GaugeEmpty";
import GaugeEmptyTwotone from "./GaugeEmptyTwotone";
import GaugeFull from "./GaugeFull";
import GaugeFullTwotone from "./GaugeFullTwotone";
import GaugeLoop from "./GaugeLoop";
import GaugeLow from "./GaugeLow";
import GaugeLowTwotone from "./GaugeLowTwotone";
import GaugeTwotone from "./GaugeTwotone";
import GaugeTwotoneLoop from "./GaugeTwotoneLoop";

export { GaugeEmpty, GaugeEmptyTwotone, GaugeFull, GaugeFullTwotone, GaugeLoop, GaugeLow, GaugeLowTwotone, GaugeTwotone, GaugeTwotoneLoop };

export const variants = [
  {
    variant: "linear",
    slug: "gauge-empty",
    Component: GaugeEmpty,
    componentName: "GaugeEmpty",
  },
  {
    variant: "twotone",
    slug: "gauge-empty-twotone",
    Component: GaugeEmptyTwotone,
    componentName: "GaugeEmptyTwotone",
  },
  {
    variant: "linear",
    slug: "gauge-full",
    Component: GaugeFull,
    componentName: "GaugeFull",
  },
  {
    variant: "twotone",
    slug: "gauge-full-twotone",
    Component: GaugeFullTwotone,
    componentName: "GaugeFullTwotone",
  },
  {
    variant: "linear",
    slug: "gauge-loop",
    Component: GaugeLoop,
    componentName: "GaugeLoop",
  },
  {
    variant: "linear",
    slug: "gauge-low",
    Component: GaugeLow,
    componentName: "GaugeLow",
  },
  {
    variant: "twotone",
    slug: "gauge-low-twotone",
    Component: GaugeLowTwotone,
    componentName: "GaugeLowTwotone",
  },
  {
    variant: "twotone",
    slug: "gauge-twotone",
    Component: GaugeTwotone,
    componentName: "GaugeTwotone",
  },
  {
    variant: "twotone",
    slug: "gauge-twotone-loop",
    Component: GaugeTwotoneLoop,
    componentName: "GaugeTwotoneLoop",
  },
];
