import UmbrellaBold from "./UmbrellaBold";
import UmbrellaBroken from "./UmbrellaBroken";
import UmbrellaBulk from "./UmbrellaBulk";
import UmbrellaLinear from "./UmbrellaLinear";
import UmbrellaOutline from "./UmbrellaOutline";
import UmbrellaTwotone from "./UmbrellaTwotone";

export { UmbrellaBold, UmbrellaBroken, UmbrellaBulk, UmbrellaLinear, UmbrellaOutline, UmbrellaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "umbrella-bold",
    Component: UmbrellaBold,
    componentName: "UmbrellaBold",
  },,
  {
    variant: "broken",
    slug: "umbrella-broken",
    Component: UmbrellaBroken,
    componentName: "UmbrellaBroken",
  },,
  {
    variant: "bulk",
    slug: "umbrella-bulk",
    Component: UmbrellaBulk,
    componentName: "UmbrellaBulk",
  },,
  {
    variant: "linear",
    slug: "umbrella-linear",
    Component: UmbrellaLinear,
    componentName: "UmbrellaLinear",
  },,
  {
    variant: "outline",
    slug: "umbrella-outline",
    Component: UmbrellaOutline,
    componentName: "UmbrellaOutline",
  },,
  {
    variant: "twotone",
    slug: "umbrella-twotone",
    Component: UmbrellaTwotone,
    componentName: "UmbrellaTwotone",
  }
];

export default { UmbrellaBold, UmbrellaBroken, UmbrellaBulk, UmbrellaLinear, UmbrellaOutline, UmbrellaTwotone };
