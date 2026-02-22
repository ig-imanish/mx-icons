import MicroscopeBold from "./MicroscopeBold";
import MicroscopeBroken from "./MicroscopeBroken";
import MicroscopeBulk from "./MicroscopeBulk";
import MicroscopeLinear from "./MicroscopeLinear";
import MicroscopeOutline from "./MicroscopeOutline";
import MicroscopeTwotone from "./MicroscopeTwotone";

export { MicroscopeBold, MicroscopeBroken, MicroscopeBulk, MicroscopeLinear, MicroscopeOutline, MicroscopeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "microscope-bold",
    Component: MicroscopeBold,
    componentName: "MicroscopeBold",
  },
  {
    variant: "broken",
    slug: "microscope-broken",
    Component: MicroscopeBroken,
    componentName: "MicroscopeBroken",
  },
  {
    variant: "bulk",
    slug: "microscope-bulk",
    Component: MicroscopeBulk,
    componentName: "MicroscopeBulk",
  },
  {
    variant: "linear",
    slug: "microscope-linear",
    Component: MicroscopeLinear,
    componentName: "MicroscopeLinear",
  },
  {
    variant: "outline",
    slug: "microscope-outline",
    Component: MicroscopeOutline,
    componentName: "MicroscopeOutline",
  },
  {
    variant: "twotone",
    slug: "microscope-twotone",
    Component: MicroscopeTwotone,
    componentName: "MicroscopeTwotone",
  },
];
