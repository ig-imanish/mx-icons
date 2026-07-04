import LightbulbBold from "./LightbulbBold";
import LightbulbBroken from "./LightbulbBroken";
import LightbulbBulk from "./LightbulbBulk";
import LightbulbLinear from "./LightbulbLinear";
import LightbulbOutline from "./LightbulbOutline";
import LightbulbTwotone from "./LightbulbTwotone";

export { LightbulbBold, LightbulbBroken, LightbulbBulk, LightbulbLinear, LightbulbOutline, LightbulbTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lightbulb-bold",
    Component: LightbulbBold,
    componentName: "LightbulbBold",
  },,
  {
    variant: "broken",
    slug: "lightbulb-broken",
    Component: LightbulbBroken,
    componentName: "LightbulbBroken",
  },,
  {
    variant: "bulk",
    slug: "lightbulb-bulk",
    Component: LightbulbBulk,
    componentName: "LightbulbBulk",
  },,
  {
    variant: "linear",
    slug: "lightbulb-linear",
    Component: LightbulbLinear,
    componentName: "LightbulbLinear",
  },,
  {
    variant: "outline",
    slug: "lightbulb-outline",
    Component: LightbulbOutline,
    componentName: "LightbulbOutline",
  },,
  {
    variant: "twotone",
    slug: "lightbulb-twotone",
    Component: LightbulbTwotone,
    componentName: "LightbulbTwotone",
  }
];

export default { LightbulbBold, LightbulbBroken, LightbulbBulk, LightbulbLinear, LightbulbOutline, LightbulbTwotone };
