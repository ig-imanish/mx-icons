import StarRingsBold from "./StarRingsBold";
import StarRingsBroken from "./StarRingsBroken";
import StarRingsBulk from "./StarRingsBulk";
import StarRingsLinear from "./StarRingsLinear";
import StarRingsOutline from "./StarRingsOutline";
import StarRingsTwotone from "./StarRingsTwotone";

export { StarRingsBold, StarRingsBroken, StarRingsBulk, StarRingsLinear, StarRingsOutline, StarRingsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-rings-bold",
    Component: StarRingsBold,
    componentName: "StarRingsBold",
  },,
  {
    variant: "broken",
    slug: "star-rings-broken",
    Component: StarRingsBroken,
    componentName: "StarRingsBroken",
  },,
  {
    variant: "bulk",
    slug: "star-rings-bulk",
    Component: StarRingsBulk,
    componentName: "StarRingsBulk",
  },,
  {
    variant: "linear",
    slug: "star-rings-linear",
    Component: StarRingsLinear,
    componentName: "StarRingsLinear",
  },,
  {
    variant: "outline",
    slug: "star-rings-outline",
    Component: StarRingsOutline,
    componentName: "StarRingsOutline",
  },,
  {
    variant: "twotone",
    slug: "star-rings-twotone",
    Component: StarRingsTwotone,
    componentName: "StarRingsTwotone",
  }
];

export default { StarRingsBold, StarRingsBroken, StarRingsBulk, StarRingsLinear, StarRingsOutline, StarRingsTwotone };
