import DnaBold from "./DnaBold";
import DnaBroken from "./DnaBroken";
import DnaBulk from "./DnaBulk";
import DnaLinear from "./DnaLinear";
import DnaOutline from "./DnaOutline";
import DnaTwotone from "./DnaTwotone";

export { DnaBold, DnaBroken, DnaBulk, DnaLinear, DnaOutline, DnaTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dna-bold",
    Component: DnaBold,
    componentName: "DnaBold",
  },,
  {
    variant: "broken",
    slug: "dna-broken",
    Component: DnaBroken,
    componentName: "DnaBroken",
  },,
  {
    variant: "bulk",
    slug: "dna-bulk",
    Component: DnaBulk,
    componentName: "DnaBulk",
  },,
  {
    variant: "linear",
    slug: "dna-linear",
    Component: DnaLinear,
    componentName: "DnaLinear",
  },,
  {
    variant: "outline",
    slug: "dna-outline",
    Component: DnaOutline,
    componentName: "DnaOutline",
  },,
  {
    variant: "twotone",
    slug: "dna-twotone",
    Component: DnaTwotone,
    componentName: "DnaTwotone",
  }
];

export default { DnaBold, DnaBroken, DnaBulk, DnaLinear, DnaOutline, DnaTwotone };
