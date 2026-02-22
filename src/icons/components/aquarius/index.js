import AquariusBold from "./AquariusBold";
import AquariusBroken from "./AquariusBroken";
import AquariusBulk from "./AquariusBulk";
import AquariusLinear from "./AquariusLinear";
import AquariusOutline from "./AquariusOutline";
import AquariusTwotone from "./AquariusTwotone";

export { AquariusBold, AquariusBroken, AquariusBulk, AquariusLinear, AquariusOutline, AquariusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "aquarius-bold",
    Component: AquariusBold,
    componentName: "AquariusBold",
  },
  {
    variant: "broken",
    slug: "aquarius-broken",
    Component: AquariusBroken,
    componentName: "AquariusBroken",
  },
  {
    variant: "bulk",
    slug: "aquarius-bulk",
    Component: AquariusBulk,
    componentName: "AquariusBulk",
  },
  {
    variant: "linear",
    slug: "aquarius-linear",
    Component: AquariusLinear,
    componentName: "AquariusLinear",
  },
  {
    variant: "outline",
    slug: "aquarius-outline",
    Component: AquariusOutline,
    componentName: "AquariusOutline",
  },
  {
    variant: "twotone",
    slug: "aquarius-twotone",
    Component: AquariusTwotone,
    componentName: "AquariusTwotone",
  },
];
