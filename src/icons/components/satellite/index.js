import SatelliteBold from "./SatelliteBold";
import SatelliteBroken from "./SatelliteBroken";
import SatelliteBulk from "./SatelliteBulk";
import SatelliteLinear from "./SatelliteLinear";
import SatelliteOutline from "./SatelliteOutline";
import SatelliteTwotone from "./SatelliteTwotone";

export { SatelliteBold, SatelliteBroken, SatelliteBulk, SatelliteLinear, SatelliteOutline, SatelliteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "satellite-bold",
    Component: SatelliteBold,
    componentName: "SatelliteBold",
  },,
  {
    variant: "broken",
    slug: "satellite-broken",
    Component: SatelliteBroken,
    componentName: "SatelliteBroken",
  },,
  {
    variant: "bulk",
    slug: "satellite-bulk",
    Component: SatelliteBulk,
    componentName: "SatelliteBulk",
  },,
  {
    variant: "linear",
    slug: "satellite-linear",
    Component: SatelliteLinear,
    componentName: "SatelliteLinear",
  },,
  {
    variant: "outline",
    slug: "satellite-outline",
    Component: SatelliteOutline,
    componentName: "SatelliteOutline",
  },,
  {
    variant: "twotone",
    slug: "satellite-twotone",
    Component: SatelliteTwotone,
    componentName: "SatelliteTwotone",
  }
];

export default { SatelliteBold, SatelliteBroken, SatelliteBulk, SatelliteLinear, SatelliteOutline, SatelliteTwotone };
