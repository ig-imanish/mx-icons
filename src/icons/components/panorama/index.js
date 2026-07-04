import PanoramaBold from "./PanoramaBold";
import PanoramaBroken from "./PanoramaBroken";
import PanoramaBulk from "./PanoramaBulk";
import PanoramaLinear from "./PanoramaLinear";
import PanoramaOutline from "./PanoramaOutline";
import PanoramaTwotone from "./PanoramaTwotone";

export { PanoramaBold, PanoramaBroken, PanoramaBulk, PanoramaLinear, PanoramaOutline, PanoramaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "panorama-bold",
    Component: PanoramaBold,
    componentName: "PanoramaBold",
  },,
  {
    variant: "broken",
    slug: "panorama-broken",
    Component: PanoramaBroken,
    componentName: "PanoramaBroken",
  },,
  {
    variant: "bulk",
    slug: "panorama-bulk",
    Component: PanoramaBulk,
    componentName: "PanoramaBulk",
  },,
  {
    variant: "linear",
    slug: "panorama-linear",
    Component: PanoramaLinear,
    componentName: "PanoramaLinear",
  },,
  {
    variant: "outline",
    slug: "panorama-outline",
    Component: PanoramaOutline,
    componentName: "PanoramaOutline",
  },,
  {
    variant: "twotone",
    slug: "panorama-twotone",
    Component: PanoramaTwotone,
    componentName: "PanoramaTwotone",
  }
];

export default { PanoramaBold, PanoramaBroken, PanoramaBulk, PanoramaLinear, PanoramaOutline, PanoramaTwotone };
