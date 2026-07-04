import SortByAlphabetBold from "./SortByAlphabetBold";
import SortByAlphabetBroken from "./SortByAlphabetBroken";
import SortByAlphabetBulk from "./SortByAlphabetBulk";
import SortByAlphabetLinear from "./SortByAlphabetLinear";
import SortByAlphabetOutline from "./SortByAlphabetOutline";
import SortByAlphabetTwotone from "./SortByAlphabetTwotone";

export { SortByAlphabetBold, SortByAlphabetBroken, SortByAlphabetBulk, SortByAlphabetLinear, SortByAlphabetOutline, SortByAlphabetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sort-by-alphabet-bold",
    Component: SortByAlphabetBold,
    componentName: "SortByAlphabetBold",
  },,
  {
    variant: "broken",
    slug: "sort-by-alphabet-broken",
    Component: SortByAlphabetBroken,
    componentName: "SortByAlphabetBroken",
  },,
  {
    variant: "bulk",
    slug: "sort-by-alphabet-bulk",
    Component: SortByAlphabetBulk,
    componentName: "SortByAlphabetBulk",
  },,
  {
    variant: "linear",
    slug: "sort-by-alphabet-linear",
    Component: SortByAlphabetLinear,
    componentName: "SortByAlphabetLinear",
  },,
  {
    variant: "outline",
    slug: "sort-by-alphabet-outline",
    Component: SortByAlphabetOutline,
    componentName: "SortByAlphabetOutline",
  },,
  {
    variant: "twotone",
    slug: "sort-by-alphabet-twotone",
    Component: SortByAlphabetTwotone,
    componentName: "SortByAlphabetTwotone",
  }
];

export default { SortByAlphabetBold, SortByAlphabetBroken, SortByAlphabetBulk, SortByAlphabetLinear, SortByAlphabetOutline, SortByAlphabetTwotone };
