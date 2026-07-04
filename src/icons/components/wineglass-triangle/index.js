import WineglassTriangleBold from "./WineglassTriangleBold";
import WineglassTriangleBroken from "./WineglassTriangleBroken";
import WineglassTriangleBulk from "./WineglassTriangleBulk";
import WineglassTriangleLinear from "./WineglassTriangleLinear";
import WineglassTriangleOutline from "./WineglassTriangleOutline";
import WineglassTriangleTwotone from "./WineglassTriangleTwotone";

export { WineglassTriangleBold, WineglassTriangleBroken, WineglassTriangleBulk, WineglassTriangleLinear, WineglassTriangleOutline, WineglassTriangleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wineglass-triangle-bold",
    Component: WineglassTriangleBold,
    componentName: "WineglassTriangleBold",
  },,
  {
    variant: "broken",
    slug: "wineglass-triangle-broken",
    Component: WineglassTriangleBroken,
    componentName: "WineglassTriangleBroken",
  },,
  {
    variant: "bulk",
    slug: "wineglass-triangle-bulk",
    Component: WineglassTriangleBulk,
    componentName: "WineglassTriangleBulk",
  },,
  {
    variant: "linear",
    slug: "wineglass-triangle-linear",
    Component: WineglassTriangleLinear,
    componentName: "WineglassTriangleLinear",
  },,
  {
    variant: "outline",
    slug: "wineglass-triangle-outline",
    Component: WineglassTriangleOutline,
    componentName: "WineglassTriangleOutline",
  },,
  {
    variant: "twotone",
    slug: "wineglass-triangle-twotone",
    Component: WineglassTriangleTwotone,
    componentName: "WineglassTriangleTwotone",
  }
];

export default { WineglassTriangleBold, WineglassTriangleBroken, WineglassTriangleBulk, WineglassTriangleLinear, WineglassTriangleOutline, WineglassTriangleTwotone };
