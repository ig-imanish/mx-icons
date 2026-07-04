import UiFilterBold from "./UiFilterBold";
import UiFilterBroken from "./UiFilterBroken";
import UiFilterBulk from "./UiFilterBulk";
import UiFilterLinear from "./UiFilterLinear";
import UiFilterOutline from "./UiFilterOutline";
import UiFilterTwotone from "./UiFilterTwotone";

export { UiFilterBold, UiFilterBroken, UiFilterBulk, UiFilterLinear, UiFilterOutline, UiFilterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-filter-bold",
    Component: UiFilterBold,
    componentName: "UiFilterBold",
  },,
  {
    variant: "broken",
    slug: "ui-filter-broken",
    Component: UiFilterBroken,
    componentName: "UiFilterBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-filter-bulk",
    Component: UiFilterBulk,
    componentName: "UiFilterBulk",
  },,
  {
    variant: "linear",
    slug: "ui-filter-linear",
    Component: UiFilterLinear,
    componentName: "UiFilterLinear",
  },,
  {
    variant: "outline",
    slug: "ui-filter-outline",
    Component: UiFilterOutline,
    componentName: "UiFilterOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-filter-twotone",
    Component: UiFilterTwotone,
    componentName: "UiFilterTwotone",
  }
];

export default { UiFilterBold, UiFilterBroken, UiFilterBulk, UiFilterLinear, UiFilterOutline, UiFilterTwotone };
