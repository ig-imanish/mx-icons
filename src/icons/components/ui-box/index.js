import UiBoxBold from "./UiBoxBold";
import UiBoxBroken from "./UiBoxBroken";
import UiBoxBulk from "./UiBoxBulk";
import UiBoxLinear from "./UiBoxLinear";
import UiBoxOutline from "./UiBoxOutline";
import UiBoxTwotone from "./UiBoxTwotone";

export { UiBoxBold, UiBoxBroken, UiBoxBulk, UiBoxLinear, UiBoxOutline, UiBoxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-box-bold",
    Component: UiBoxBold,
    componentName: "UiBoxBold",
  },,
  {
    variant: "broken",
    slug: "ui-box-broken",
    Component: UiBoxBroken,
    componentName: "UiBoxBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-box-bulk",
    Component: UiBoxBulk,
    componentName: "UiBoxBulk",
  },,
  {
    variant: "linear",
    slug: "ui-box-linear",
    Component: UiBoxLinear,
    componentName: "UiBoxLinear",
  },,
  {
    variant: "outline",
    slug: "ui-box-outline",
    Component: UiBoxOutline,
    componentName: "UiBoxOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-box-twotone",
    Component: UiBoxTwotone,
    componentName: "UiBoxTwotone",
  }
];

export default { UiBoxBold, UiBoxBroken, UiBoxBulk, UiBoxLinear, UiBoxOutline, UiBoxTwotone };
