import AtomBold from "./AtomBold";
import AtomBroken from "./AtomBroken";
import AtomBulk from "./AtomBulk";
import AtomLinear from "./AtomLinear";
import AtomOutline from "./AtomOutline";
import AtomTwotone from "./AtomTwotone";

export { AtomBold, AtomBroken, AtomBulk, AtomLinear, AtomOutline, AtomTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "atom-bold",
    Component: AtomBold,
    componentName: "AtomBold",
  },,
  {
    variant: "broken",
    slug: "atom-broken",
    Component: AtomBroken,
    componentName: "AtomBroken",
  },,
  {
    variant: "bulk",
    slug: "atom-bulk",
    Component: AtomBulk,
    componentName: "AtomBulk",
  },,
  {
    variant: "linear",
    slug: "atom-linear",
    Component: AtomLinear,
    componentName: "AtomLinear",
  },,
  {
    variant: "outline",
    slug: "atom-outline",
    Component: AtomOutline,
    componentName: "AtomOutline",
  },,
  {
    variant: "twotone",
    slug: "atom-twotone",
    Component: AtomTwotone,
    componentName: "AtomTwotone",
  }
];

export default { AtomBold, AtomBroken, AtomBulk, AtomLinear, AtomOutline, AtomTwotone };
