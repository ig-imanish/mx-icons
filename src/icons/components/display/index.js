import DisplayBold from "./DisplayBold";
import DisplayBroken from "./DisplayBroken";
import DisplayBulk from "./DisplayBulk";
import DisplayLinear from "./DisplayLinear";
import DisplayOutline from "./DisplayOutline";
import DisplayTwotone from "./DisplayTwotone";

export { DisplayBold, DisplayBroken, DisplayBulk, DisplayLinear, DisplayOutline, DisplayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "display-bold",
    Component: DisplayBold,
    componentName: "DisplayBold",
  },,
  {
    variant: "broken",
    slug: "display-broken",
    Component: DisplayBroken,
    componentName: "DisplayBroken",
  },,
  {
    variant: "bulk",
    slug: "display-bulk",
    Component: DisplayBulk,
    componentName: "DisplayBulk",
  },,
  {
    variant: "linear",
    slug: "display-linear",
    Component: DisplayLinear,
    componentName: "DisplayLinear",
  },,
  {
    variant: "outline",
    slug: "display-outline",
    Component: DisplayOutline,
    componentName: "DisplayOutline",
  },,
  {
    variant: "twotone",
    slug: "display-twotone",
    Component: DisplayTwotone,
    componentName: "DisplayTwotone",
  }
];

export default { DisplayBold, DisplayBroken, DisplayBulk, DisplayLinear, DisplayOutline, DisplayTwotone };
