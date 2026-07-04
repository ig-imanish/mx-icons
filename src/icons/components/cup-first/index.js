import CupFirstBold from "./CupFirstBold";
import CupFirstBroken from "./CupFirstBroken";
import CupFirstBulk from "./CupFirstBulk";
import CupFirstLinear from "./CupFirstLinear";
import CupFirstOutline from "./CupFirstOutline";
import CupFirstTwotone from "./CupFirstTwotone";

export { CupFirstBold, CupFirstBroken, CupFirstBulk, CupFirstLinear, CupFirstOutline, CupFirstTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cup-first-bold",
    Component: CupFirstBold,
    componentName: "CupFirstBold",
  },,
  {
    variant: "broken",
    slug: "cup-first-broken",
    Component: CupFirstBroken,
    componentName: "CupFirstBroken",
  },,
  {
    variant: "bulk",
    slug: "cup-first-bulk",
    Component: CupFirstBulk,
    componentName: "CupFirstBulk",
  },,
  {
    variant: "linear",
    slug: "cup-first-linear",
    Component: CupFirstLinear,
    componentName: "CupFirstLinear",
  },,
  {
    variant: "outline",
    slug: "cup-first-outline",
    Component: CupFirstOutline,
    componentName: "CupFirstOutline",
  },,
  {
    variant: "twotone",
    slug: "cup-first-twotone",
    Component: CupFirstTwotone,
    componentName: "CupFirstTwotone",
  }
];

export default { CupFirstBold, CupFirstBroken, CupFirstBulk, CupFirstLinear, CupFirstOutline, CupFirstTwotone };
