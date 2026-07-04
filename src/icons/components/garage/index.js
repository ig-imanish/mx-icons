import GarageBold from "./GarageBold";
import GarageBroken from "./GarageBroken";
import GarageBulk from "./GarageBulk";
import GarageLinear from "./GarageLinear";
import GarageOutline from "./GarageOutline";
import GarageTwotone from "./GarageTwotone";

export { GarageBold, GarageBroken, GarageBulk, GarageLinear, GarageOutline, GarageTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "garage-bold",
    Component: GarageBold,
    componentName: "GarageBold",
  },,
  {
    variant: "broken",
    slug: "garage-broken",
    Component: GarageBroken,
    componentName: "GarageBroken",
  },,
  {
    variant: "bulk",
    slug: "garage-bulk",
    Component: GarageBulk,
    componentName: "GarageBulk",
  },,
  {
    variant: "linear",
    slug: "garage-linear",
    Component: GarageLinear,
    componentName: "GarageLinear",
  },,
  {
    variant: "outline",
    slug: "garage-outline",
    Component: GarageOutline,
    componentName: "GarageOutline",
  },,
  {
    variant: "twotone",
    slug: "garage-twotone",
    Component: GarageTwotone,
    componentName: "GarageTwotone",
  }
];

export default { GarageBold, GarageBroken, GarageBulk, GarageLinear, GarageOutline, GarageTwotone };
