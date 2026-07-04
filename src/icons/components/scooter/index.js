import ScooterBold from "./ScooterBold";
import ScooterBroken from "./ScooterBroken";
import ScooterBulk from "./ScooterBulk";
import ScooterLinear from "./ScooterLinear";
import ScooterOutline from "./ScooterOutline";
import ScooterTwotone from "./ScooterTwotone";

export { ScooterBold, ScooterBroken, ScooterBulk, ScooterLinear, ScooterOutline, ScooterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scooter-bold",
    Component: ScooterBold,
    componentName: "ScooterBold",
  },,
  {
    variant: "broken",
    slug: "scooter-broken",
    Component: ScooterBroken,
    componentName: "ScooterBroken",
  },,
  {
    variant: "bulk",
    slug: "scooter-bulk",
    Component: ScooterBulk,
    componentName: "ScooterBulk",
  },,
  {
    variant: "linear",
    slug: "scooter-linear",
    Component: ScooterLinear,
    componentName: "ScooterLinear",
  },,
  {
    variant: "outline",
    slug: "scooter-outline",
    Component: ScooterOutline,
    componentName: "ScooterOutline",
  },,
  {
    variant: "twotone",
    slug: "scooter-twotone",
    Component: ScooterTwotone,
    componentName: "ScooterTwotone",
  }
];

export default { ScooterBold, ScooterBroken, ScooterBulk, ScooterLinear, ScooterOutline, ScooterTwotone };
