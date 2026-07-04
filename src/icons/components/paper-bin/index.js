import PaperBinBold from "./PaperBinBold";
import PaperBinBroken from "./PaperBinBroken";
import PaperBinBulk from "./PaperBinBulk";
import PaperBinLinear from "./PaperBinLinear";
import PaperBinOutline from "./PaperBinOutline";
import PaperBinTwotone from "./PaperBinTwotone";

export { PaperBinBold, PaperBinBroken, PaperBinBulk, PaperBinLinear, PaperBinOutline, PaperBinTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "paper-bin-bold",
    Component: PaperBinBold,
    componentName: "PaperBinBold",
  },,
  {
    variant: "broken",
    slug: "paper-bin-broken",
    Component: PaperBinBroken,
    componentName: "PaperBinBroken",
  },,
  {
    variant: "bulk",
    slug: "paper-bin-bulk",
    Component: PaperBinBulk,
    componentName: "PaperBinBulk",
  },,
  {
    variant: "linear",
    slug: "paper-bin-linear",
    Component: PaperBinLinear,
    componentName: "PaperBinLinear",
  },,
  {
    variant: "outline",
    slug: "paper-bin-outline",
    Component: PaperBinOutline,
    componentName: "PaperBinOutline",
  },,
  {
    variant: "twotone",
    slug: "paper-bin-twotone",
    Component: PaperBinTwotone,
    componentName: "PaperBinTwotone",
  }
];

export default { PaperBinBold, PaperBinBroken, PaperBinBulk, PaperBinLinear, PaperBinOutline, PaperBinTwotone };
