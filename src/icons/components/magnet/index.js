import MagnetBold from "./MagnetBold";
import MagnetBroken from "./MagnetBroken";
import MagnetBulk from "./MagnetBulk";
import MagnetLinear from "./MagnetLinear";
import MagnetOutline from "./MagnetOutline";
import MagnetTwotone from "./MagnetTwotone";

export { MagnetBold, MagnetBroken, MagnetBulk, MagnetLinear, MagnetOutline, MagnetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "magnet-bold",
    Component: MagnetBold,
    componentName: "MagnetBold",
  },,
  {
    variant: "broken",
    slug: "magnet-broken",
    Component: MagnetBroken,
    componentName: "MagnetBroken",
  },,
  {
    variant: "bulk",
    slug: "magnet-bulk",
    Component: MagnetBulk,
    componentName: "MagnetBulk",
  },,
  {
    variant: "linear",
    slug: "magnet-linear",
    Component: MagnetLinear,
    componentName: "MagnetLinear",
  },,
  {
    variant: "outline",
    slug: "magnet-outline",
    Component: MagnetOutline,
    componentName: "MagnetOutline",
  },,
  {
    variant: "twotone",
    slug: "magnet-twotone",
    Component: MagnetTwotone,
    componentName: "MagnetTwotone",
  }
];

export default { MagnetBold, MagnetBroken, MagnetBulk, MagnetLinear, MagnetOutline, MagnetTwotone };
