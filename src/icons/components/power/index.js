import PowerBold from "./PowerBold";
import PowerBroken from "./PowerBroken";
import PowerBulk from "./PowerBulk";
import PowerLinear from "./PowerLinear";
import PowerOutline from "./PowerOutline";
import PowerTwotone from "./PowerTwotone";

export { PowerBold, PowerBroken, PowerBulk, PowerLinear, PowerOutline, PowerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "power-bold",
    Component: PowerBold,
    componentName: "PowerBold",
  },,
  {
    variant: "broken",
    slug: "power-broken",
    Component: PowerBroken,
    componentName: "PowerBroken",
  },,
  {
    variant: "bulk",
    slug: "power-bulk",
    Component: PowerBulk,
    componentName: "PowerBulk",
  },,
  {
    variant: "linear",
    slug: "power-linear",
    Component: PowerLinear,
    componentName: "PowerLinear",
  },,
  {
    variant: "outline",
    slug: "power-outline",
    Component: PowerOutline,
    componentName: "PowerOutline",
  },,
  {
    variant: "twotone",
    slug: "power-twotone",
    Component: PowerTwotone,
    componentName: "PowerTwotone",
  }
];

export default { PowerBold, PowerBroken, PowerBulk, PowerLinear, PowerOutline, PowerTwotone };
