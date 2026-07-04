import BathBold from "./BathBold";
import BathBroken from "./BathBroken";
import BathBulk from "./BathBulk";
import BathLinear from "./BathLinear";
import BathOutline from "./BathOutline";
import BathTwotone from "./BathTwotone";

export { BathBold, BathBroken, BathBulk, BathLinear, BathOutline, BathTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bath-bold",
    Component: BathBold,
    componentName: "BathBold",
  },,
  {
    variant: "broken",
    slug: "bath-broken",
    Component: BathBroken,
    componentName: "BathBroken",
  },,
  {
    variant: "bulk",
    slug: "bath-bulk",
    Component: BathBulk,
    componentName: "BathBulk",
  },,
  {
    variant: "linear",
    slug: "bath-linear",
    Component: BathLinear,
    componentName: "BathLinear",
  },,
  {
    variant: "outline",
    slug: "bath-outline",
    Component: BathOutline,
    componentName: "BathOutline",
  },,
  {
    variant: "twotone",
    slug: "bath-twotone",
    Component: BathTwotone,
    componentName: "BathTwotone",
  }
];

export default { BathBold, BathBroken, BathBulk, BathLinear, BathOutline, BathTwotone };
