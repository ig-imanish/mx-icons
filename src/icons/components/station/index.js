import StationBold from "./StationBold";
import StationBroken from "./StationBroken";
import StationBulk from "./StationBulk";
import StationLinear from "./StationLinear";
import StationOutline from "./StationOutline";
import StationTwotone from "./StationTwotone";

export { StationBold, StationBroken, StationBulk, StationLinear, StationOutline, StationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "station-bold",
    Component: StationBold,
    componentName: "StationBold",
  },,
  {
    variant: "broken",
    slug: "station-broken",
    Component: StationBroken,
    componentName: "StationBroken",
  },,
  {
    variant: "bulk",
    slug: "station-bulk",
    Component: StationBulk,
    componentName: "StationBulk",
  },,
  {
    variant: "linear",
    slug: "station-linear",
    Component: StationLinear,
    componentName: "StationLinear",
  },,
  {
    variant: "outline",
    slug: "station-outline",
    Component: StationOutline,
    componentName: "StationOutline",
  },,
  {
    variant: "twotone",
    slug: "station-twotone",
    Component: StationTwotone,
    componentName: "StationTwotone",
  }
];

export default { StationBold, StationBroken, StationBulk, StationLinear, StationOutline, StationTwotone };
