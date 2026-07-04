import UiCupBold from "./UiCupBold";
import UiCupBroken from "./UiCupBroken";
import UiCupBulk from "./UiCupBulk";
import UiCupLinear from "./UiCupLinear";
import UiCupOutline from "./UiCupOutline";
import UiCupTwotone from "./UiCupTwotone";

export { UiCupBold, UiCupBroken, UiCupBulk, UiCupLinear, UiCupOutline, UiCupTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-cup-bold",
    Component: UiCupBold,
    componentName: "UiCupBold",
  },,
  {
    variant: "broken",
    slug: "ui-cup-broken",
    Component: UiCupBroken,
    componentName: "UiCupBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-cup-bulk",
    Component: UiCupBulk,
    componentName: "UiCupBulk",
  },,
  {
    variant: "linear",
    slug: "ui-cup-linear",
    Component: UiCupLinear,
    componentName: "UiCupLinear",
  },,
  {
    variant: "outline",
    slug: "ui-cup-outline",
    Component: UiCupOutline,
    componentName: "UiCupOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-cup-twotone",
    Component: UiCupTwotone,
    componentName: "UiCupTwotone",
  }
];

export default { UiCupBold, UiCupBroken, UiCupBulk, UiCupLinear, UiCupOutline, UiCupTwotone };
