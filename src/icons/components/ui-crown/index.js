import UiCrownBold from "./UiCrownBold";
import UiCrownBroken from "./UiCrownBroken";
import UiCrownBulk from "./UiCrownBulk";
import UiCrownLinear from "./UiCrownLinear";
import UiCrownOutline from "./UiCrownOutline";
import UiCrownTwotone from "./UiCrownTwotone";

export { UiCrownBold, UiCrownBroken, UiCrownBulk, UiCrownLinear, UiCrownOutline, UiCrownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-crown-bold",
    Component: UiCrownBold,
    componentName: "UiCrownBold",
  },,
  {
    variant: "broken",
    slug: "ui-crown-broken",
    Component: UiCrownBroken,
    componentName: "UiCrownBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-crown-bulk",
    Component: UiCrownBulk,
    componentName: "UiCrownBulk",
  },,
  {
    variant: "linear",
    slug: "ui-crown-linear",
    Component: UiCrownLinear,
    componentName: "UiCrownLinear",
  },,
  {
    variant: "outline",
    slug: "ui-crown-outline",
    Component: UiCrownOutline,
    componentName: "UiCrownOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-crown-twotone",
    Component: UiCrownTwotone,
    componentName: "UiCrownTwotone",
  }
];

export default { UiCrownBold, UiCrownBroken, UiCrownBulk, UiCrownLinear, UiCrownOutline, UiCrownTwotone };
