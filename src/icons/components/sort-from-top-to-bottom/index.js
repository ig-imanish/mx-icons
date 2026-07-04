import SortFromTopToBottomBold from "./SortFromTopToBottomBold";
import SortFromTopToBottomBroken from "./SortFromTopToBottomBroken";
import SortFromTopToBottomBulk from "./SortFromTopToBottomBulk";
import SortFromTopToBottomLinear from "./SortFromTopToBottomLinear";
import SortFromTopToBottomOutline from "./SortFromTopToBottomOutline";
import SortFromTopToBottomTwotone from "./SortFromTopToBottomTwotone";

export { SortFromTopToBottomBold, SortFromTopToBottomBroken, SortFromTopToBottomBulk, SortFromTopToBottomLinear, SortFromTopToBottomOutline, SortFromTopToBottomTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sort-from-top-to-bottom-bold",
    Component: SortFromTopToBottomBold,
    componentName: "SortFromTopToBottomBold",
  },,
  {
    variant: "broken",
    slug: "sort-from-top-to-bottom-broken",
    Component: SortFromTopToBottomBroken,
    componentName: "SortFromTopToBottomBroken",
  },,
  {
    variant: "bulk",
    slug: "sort-from-top-to-bottom-bulk",
    Component: SortFromTopToBottomBulk,
    componentName: "SortFromTopToBottomBulk",
  },,
  {
    variant: "linear",
    slug: "sort-from-top-to-bottom-linear",
    Component: SortFromTopToBottomLinear,
    componentName: "SortFromTopToBottomLinear",
  },,
  {
    variant: "outline",
    slug: "sort-from-top-to-bottom-outline",
    Component: SortFromTopToBottomOutline,
    componentName: "SortFromTopToBottomOutline",
  },,
  {
    variant: "twotone",
    slug: "sort-from-top-to-bottom-twotone",
    Component: SortFromTopToBottomTwotone,
    componentName: "SortFromTopToBottomTwotone",
  }
];

export default { SortFromTopToBottomBold, SortFromTopToBottomBroken, SortFromTopToBottomBulk, SortFromTopToBottomLinear, SortFromTopToBottomOutline, SortFromTopToBottomTwotone };
