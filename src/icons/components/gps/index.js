import GpsBold from "./GpsBold";
import GpsBroken from "./GpsBroken";
import GpsBulk from "./GpsBulk";
import GpsLinear from "./GpsLinear";
import GpsOutline from "./GpsOutline";
import GpsTwotone from "./GpsTwotone";

export { GpsBold, GpsBroken, GpsBulk, GpsLinear, GpsOutline, GpsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gps-bold",
    Component: GpsBold,
    componentName: "GpsBold",
  },
  {
    variant: "broken",
    slug: "gps-broken",
    Component: GpsBroken,
    componentName: "GpsBroken",
  },
  {
    variant: "bulk",
    slug: "gps-bulk",
    Component: GpsBulk,
    componentName: "GpsBulk",
  },
  {
    variant: "linear",
    slug: "gps-linear",
    Component: GpsLinear,
    componentName: "GpsLinear",
  },
  {
    variant: "outline",
    slug: "gps-outline",
    Component: GpsOutline,
    componentName: "GpsOutline",
  },
  {
    variant: "twotone",
    slug: "gps-twotone",
    Component: GpsTwotone,
    componentName: "GpsTwotone",
  },
];
