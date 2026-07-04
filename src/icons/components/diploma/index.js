import DiplomaBold from "./DiplomaBold";
import DiplomaBroken from "./DiplomaBroken";
import DiplomaBulk from "./DiplomaBulk";
import DiplomaLinear from "./DiplomaLinear";
import DiplomaOutline from "./DiplomaOutline";
import DiplomaTwotone from "./DiplomaTwotone";

export { DiplomaBold, DiplomaBroken, DiplomaBulk, DiplomaLinear, DiplomaOutline, DiplomaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "diploma-bold",
    Component: DiplomaBold,
    componentName: "DiplomaBold",
  },,
  {
    variant: "broken",
    slug: "diploma-broken",
    Component: DiplomaBroken,
    componentName: "DiplomaBroken",
  },,
  {
    variant: "bulk",
    slug: "diploma-bulk",
    Component: DiplomaBulk,
    componentName: "DiplomaBulk",
  },,
  {
    variant: "linear",
    slug: "diploma-linear",
    Component: DiplomaLinear,
    componentName: "DiplomaLinear",
  },,
  {
    variant: "outline",
    slug: "diploma-outline",
    Component: DiplomaOutline,
    componentName: "DiplomaOutline",
  },,
  {
    variant: "twotone",
    slug: "diploma-twotone",
    Component: DiplomaTwotone,
    componentName: "DiplomaTwotone",
  }
];

export default { DiplomaBold, DiplomaBroken, DiplomaBulk, DiplomaLinear, DiplomaOutline, DiplomaTwotone };
