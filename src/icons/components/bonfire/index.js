import BonfireBold from "./BonfireBold";
import BonfireBroken from "./BonfireBroken";
import BonfireBulk from "./BonfireBulk";
import BonfireLinear from "./BonfireLinear";
import BonfireOutline from "./BonfireOutline";
import BonfireTwotone from "./BonfireTwotone";

export { BonfireBold, BonfireBroken, BonfireBulk, BonfireLinear, BonfireOutline, BonfireTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bonfire-bold",
    Component: BonfireBold,
    componentName: "BonfireBold",
  },,
  {
    variant: "broken",
    slug: "bonfire-broken",
    Component: BonfireBroken,
    componentName: "BonfireBroken",
  },,
  {
    variant: "bulk",
    slug: "bonfire-bulk",
    Component: BonfireBulk,
    componentName: "BonfireBulk",
  },,
  {
    variant: "linear",
    slug: "bonfire-linear",
    Component: BonfireLinear,
    componentName: "BonfireLinear",
  },,
  {
    variant: "outline",
    slug: "bonfire-outline",
    Component: BonfireOutline,
    componentName: "BonfireOutline",
  },,
  {
    variant: "twotone",
    slug: "bonfire-twotone",
    Component: BonfireTwotone,
    componentName: "BonfireTwotone",
  }
];

export default { BonfireBold, BonfireBroken, BonfireBulk, BonfireLinear, BonfireOutline, BonfireTwotone };
