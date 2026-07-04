import FloorLampBold from "./FloorLampBold";
import FloorLampBroken from "./FloorLampBroken";
import FloorLampBulk from "./FloorLampBulk";
import FloorLampLinear from "./FloorLampLinear";
import FloorLampOutline from "./FloorLampOutline";
import FloorLampTwotone from "./FloorLampTwotone";

export { FloorLampBold, FloorLampBroken, FloorLampBulk, FloorLampLinear, FloorLampOutline, FloorLampTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "floor-lamp-bold",
    Component: FloorLampBold,
    componentName: "FloorLampBold",
  },,
  {
    variant: "broken",
    slug: "floor-lamp-broken",
    Component: FloorLampBroken,
    componentName: "FloorLampBroken",
  },,
  {
    variant: "bulk",
    slug: "floor-lamp-bulk",
    Component: FloorLampBulk,
    componentName: "FloorLampBulk",
  },,
  {
    variant: "linear",
    slug: "floor-lamp-linear",
    Component: FloorLampLinear,
    componentName: "FloorLampLinear",
  },,
  {
    variant: "outline",
    slug: "floor-lamp-outline",
    Component: FloorLampOutline,
    componentName: "FloorLampOutline",
  },,
  {
    variant: "twotone",
    slug: "floor-lamp-twotone",
    Component: FloorLampTwotone,
    componentName: "FloorLampTwotone",
  }
];

export default { FloorLampBold, FloorLampBroken, FloorLampBulk, FloorLampLinear, FloorLampOutline, FloorLampTwotone };
