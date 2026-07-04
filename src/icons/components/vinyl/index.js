import VinylBold from "./VinylBold";
import VinylBroken from "./VinylBroken";
import VinylBulk from "./VinylBulk";
import VinylLinear from "./VinylLinear";
import VinylOutline from "./VinylOutline";
import VinylTwotone from "./VinylTwotone";

export { VinylBold, VinylBroken, VinylBulk, VinylLinear, VinylOutline, VinylTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "vinyl-bold",
    Component: VinylBold,
    componentName: "VinylBold",
  },,
  {
    variant: "broken",
    slug: "vinyl-broken",
    Component: VinylBroken,
    componentName: "VinylBroken",
  },,
  {
    variant: "bulk",
    slug: "vinyl-bulk",
    Component: VinylBulk,
    componentName: "VinylBulk",
  },,
  {
    variant: "linear",
    slug: "vinyl-linear",
    Component: VinylLinear,
    componentName: "VinylLinear",
  },,
  {
    variant: "outline",
    slug: "vinyl-outline",
    Component: VinylOutline,
    componentName: "VinylOutline",
  },,
  {
    variant: "twotone",
    slug: "vinyl-twotone",
    Component: VinylTwotone,
    componentName: "VinylTwotone",
  }
];

export default { VinylBold, VinylBroken, VinylBulk, VinylLinear, VinylOutline, VinylTwotone };
