import PetBold from "./PetBold";
import PetBroken from "./PetBroken";
import PetBulk from "./PetBulk";
import PetLinear from "./PetLinear";
import PetOutline from "./PetOutline";
import PetTwotone from "./PetTwotone";

export { PetBold, PetBroken, PetBulk, PetLinear, PetOutline, PetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pet-bold",
    Component: PetBold,
    componentName: "PetBold",
  },
  {
    variant: "broken",
    slug: "pet-broken",
    Component: PetBroken,
    componentName: "PetBroken",
  },
  {
    variant: "bulk",
    slug: "pet-bulk",
    Component: PetBulk,
    componentName: "PetBulk",
  },
  {
    variant: "linear",
    slug: "pet-linear",
    Component: PetLinear,
    componentName: "PetLinear",
  },
  {
    variant: "outline",
    slug: "pet-outline",
    Component: PetOutline,
    componentName: "PetOutline",
  },
  {
    variant: "twotone",
    slug: "pet-twotone",
    Component: PetTwotone,
    componentName: "PetTwotone",
  },
];
