import CupPaperBold from "./CupPaperBold";
import CupPaperBroken from "./CupPaperBroken";
import CupPaperBulk from "./CupPaperBulk";
import CupPaperLinear from "./CupPaperLinear";
import CupPaperOutline from "./CupPaperOutline";
import CupPaperTwotone from "./CupPaperTwotone";

export { CupPaperBold, CupPaperBroken, CupPaperBulk, CupPaperLinear, CupPaperOutline, CupPaperTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cup-paper-bold",
    Component: CupPaperBold,
    componentName: "CupPaperBold",
  },,
  {
    variant: "broken",
    slug: "cup-paper-broken",
    Component: CupPaperBroken,
    componentName: "CupPaperBroken",
  },,
  {
    variant: "bulk",
    slug: "cup-paper-bulk",
    Component: CupPaperBulk,
    componentName: "CupPaperBulk",
  },,
  {
    variant: "linear",
    slug: "cup-paper-linear",
    Component: CupPaperLinear,
    componentName: "CupPaperLinear",
  },,
  {
    variant: "outline",
    slug: "cup-paper-outline",
    Component: CupPaperOutline,
    componentName: "CupPaperOutline",
  },,
  {
    variant: "twotone",
    slug: "cup-paper-twotone",
    Component: CupPaperTwotone,
    componentName: "CupPaperTwotone",
  }
];

export default { CupPaperBold, CupPaperBroken, CupPaperBulk, CupPaperLinear, CupPaperOutline, CupPaperTwotone };
