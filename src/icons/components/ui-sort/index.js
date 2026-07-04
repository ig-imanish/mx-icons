import UiSortBold from "./UiSortBold";
import UiSortBroken from "./UiSortBroken";
import UiSortBulk from "./UiSortBulk";
import UiSortLinear from "./UiSortLinear";
import UiSortOutline from "./UiSortOutline";
import UiSortTwotone from "./UiSortTwotone";

export { UiSortBold, UiSortBroken, UiSortBulk, UiSortLinear, UiSortOutline, UiSortTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-sort-bold",
    Component: UiSortBold,
    componentName: "UiSortBold",
  },,
  {
    variant: "broken",
    slug: "ui-sort-broken",
    Component: UiSortBroken,
    componentName: "UiSortBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-sort-bulk",
    Component: UiSortBulk,
    componentName: "UiSortBulk",
  },,
  {
    variant: "linear",
    slug: "ui-sort-linear",
    Component: UiSortLinear,
    componentName: "UiSortLinear",
  },,
  {
    variant: "outline",
    slug: "ui-sort-outline",
    Component: UiSortOutline,
    componentName: "UiSortOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-sort-twotone",
    Component: UiSortTwotone,
    componentName: "UiSortTwotone",
  }
];

export default { UiSortBold, UiSortBroken, UiSortBulk, UiSortLinear, UiSortOutline, UiSortTwotone };
