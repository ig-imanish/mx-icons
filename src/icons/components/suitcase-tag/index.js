import SuitcaseTagBold from "./SuitcaseTagBold";
import SuitcaseTagBroken from "./SuitcaseTagBroken";
import SuitcaseTagBulk from "./SuitcaseTagBulk";
import SuitcaseTagLinear from "./SuitcaseTagLinear";
import SuitcaseTagOutline from "./SuitcaseTagOutline";
import SuitcaseTagTwotone from "./SuitcaseTagTwotone";

export { SuitcaseTagBold, SuitcaseTagBroken, SuitcaseTagBulk, SuitcaseTagLinear, SuitcaseTagOutline, SuitcaseTagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "suitcase-tag-bold",
    Component: SuitcaseTagBold,
    componentName: "SuitcaseTagBold",
  },,
  {
    variant: "broken",
    slug: "suitcase-tag-broken",
    Component: SuitcaseTagBroken,
    componentName: "SuitcaseTagBroken",
  },,
  {
    variant: "bulk",
    slug: "suitcase-tag-bulk",
    Component: SuitcaseTagBulk,
    componentName: "SuitcaseTagBulk",
  },,
  {
    variant: "linear",
    slug: "suitcase-tag-linear",
    Component: SuitcaseTagLinear,
    componentName: "SuitcaseTagLinear",
  },,
  {
    variant: "outline",
    slug: "suitcase-tag-outline",
    Component: SuitcaseTagOutline,
    componentName: "SuitcaseTagOutline",
  },,
  {
    variant: "twotone",
    slug: "suitcase-tag-twotone",
    Component: SuitcaseTagTwotone,
    componentName: "SuitcaseTagTwotone",
  }
];

export default { SuitcaseTagBold, SuitcaseTagBroken, SuitcaseTagBulk, SuitcaseTagLinear, SuitcaseTagOutline, SuitcaseTagTwotone };
