import BacteriaBold from "./BacteriaBold";
import BacteriaBroken from "./BacteriaBroken";
import BacteriaBulk from "./BacteriaBulk";
import BacteriaLinear from "./BacteriaLinear";
import BacteriaOutline from "./BacteriaOutline";
import BacteriaTwotone from "./BacteriaTwotone";

export { BacteriaBold, BacteriaBroken, BacteriaBulk, BacteriaLinear, BacteriaOutline, BacteriaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bacteria-bold",
    Component: BacteriaBold,
    componentName: "BacteriaBold",
  },,
  {
    variant: "broken",
    slug: "bacteria-broken",
    Component: BacteriaBroken,
    componentName: "BacteriaBroken",
  },,
  {
    variant: "bulk",
    slug: "bacteria-bulk",
    Component: BacteriaBulk,
    componentName: "BacteriaBulk",
  },,
  {
    variant: "linear",
    slug: "bacteria-linear",
    Component: BacteriaLinear,
    componentName: "BacteriaLinear",
  },,
  {
    variant: "outline",
    slug: "bacteria-outline",
    Component: BacteriaOutline,
    componentName: "BacteriaOutline",
  },,
  {
    variant: "twotone",
    slug: "bacteria-twotone",
    Component: BacteriaTwotone,
    componentName: "BacteriaTwotone",
  }
];

export default { BacteriaBold, BacteriaBroken, BacteriaBulk, BacteriaLinear, BacteriaOutline, BacteriaTwotone };
