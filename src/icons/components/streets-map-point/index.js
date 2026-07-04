import StreetsMapPointBold from "./StreetsMapPointBold";
import StreetsMapPointBroken from "./StreetsMapPointBroken";
import StreetsMapPointBulk from "./StreetsMapPointBulk";
import StreetsMapPointLinear from "./StreetsMapPointLinear";
import StreetsMapPointOutline from "./StreetsMapPointOutline";
import StreetsMapPointTwotone from "./StreetsMapPointTwotone";

export { StreetsMapPointBold, StreetsMapPointBroken, StreetsMapPointBulk, StreetsMapPointLinear, StreetsMapPointOutline, StreetsMapPointTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "streets-map-point-bold",
    Component: StreetsMapPointBold,
    componentName: "StreetsMapPointBold",
  },,
  {
    variant: "broken",
    slug: "streets-map-point-broken",
    Component: StreetsMapPointBroken,
    componentName: "StreetsMapPointBroken",
  },,
  {
    variant: "bulk",
    slug: "streets-map-point-bulk",
    Component: StreetsMapPointBulk,
    componentName: "StreetsMapPointBulk",
  },,
  {
    variant: "linear",
    slug: "streets-map-point-linear",
    Component: StreetsMapPointLinear,
    componentName: "StreetsMapPointLinear",
  },,
  {
    variant: "outline",
    slug: "streets-map-point-outline",
    Component: StreetsMapPointOutline,
    componentName: "StreetsMapPointOutline",
  },,
  {
    variant: "twotone",
    slug: "streets-map-point-twotone",
    Component: StreetsMapPointTwotone,
    componentName: "StreetsMapPointTwotone",
  }
];

export default { StreetsMapPointBold, StreetsMapPointBroken, StreetsMapPointBulk, StreetsMapPointLinear, StreetsMapPointOutline, StreetsMapPointTwotone };
