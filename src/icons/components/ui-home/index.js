import UiHomeBold from "./UiHomeBold";
import UiHomeBroken from "./UiHomeBroken";
import UiHomeBulk from "./UiHomeBulk";
import UiHomeLinear from "./UiHomeLinear";
import UiHomeOutline from "./UiHomeOutline";
import UiHomeTwotone from "./UiHomeTwotone";

export { UiHomeBold, UiHomeBroken, UiHomeBulk, UiHomeLinear, UiHomeOutline, UiHomeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-home-bold",
    Component: UiHomeBold,
    componentName: "UiHomeBold",
  },,
  {
    variant: "broken",
    slug: "ui-home-broken",
    Component: UiHomeBroken,
    componentName: "UiHomeBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-home-bulk",
    Component: UiHomeBulk,
    componentName: "UiHomeBulk",
  },,
  {
    variant: "linear",
    slug: "ui-home-linear",
    Component: UiHomeLinear,
    componentName: "UiHomeLinear",
  },,
  {
    variant: "outline",
    slug: "ui-home-outline",
    Component: UiHomeOutline,
    componentName: "UiHomeOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-home-twotone",
    Component: UiHomeTwotone,
    componentName: "UiHomeTwotone",
  }
];

export default { UiHomeBold, UiHomeBroken, UiHomeBulk, UiHomeLinear, UiHomeOutline, UiHomeTwotone };
