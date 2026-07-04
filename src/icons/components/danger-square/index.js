import DangerSquareBold from "./DangerSquareBold";
import DangerSquareBroken from "./DangerSquareBroken";
import DangerSquareBulk from "./DangerSquareBulk";
import DangerSquareLinear from "./DangerSquareLinear";
import DangerSquareOutline from "./DangerSquareOutline";
import DangerSquareTwotone from "./DangerSquareTwotone";

export { DangerSquareBold, DangerSquareBroken, DangerSquareBulk, DangerSquareLinear, DangerSquareOutline, DangerSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "danger-square-bold",
    Component: DangerSquareBold,
    componentName: "DangerSquareBold",
  },,
  {
    variant: "broken",
    slug: "danger-square-broken",
    Component: DangerSquareBroken,
    componentName: "DangerSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "danger-square-bulk",
    Component: DangerSquareBulk,
    componentName: "DangerSquareBulk",
  },,
  {
    variant: "linear",
    slug: "danger-square-linear",
    Component: DangerSquareLinear,
    componentName: "DangerSquareLinear",
  },,
  {
    variant: "outline",
    slug: "danger-square-outline",
    Component: DangerSquareOutline,
    componentName: "DangerSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "danger-square-twotone",
    Component: DangerSquareTwotone,
    componentName: "DangerSquareTwotone",
  }
];

export default { DangerSquareBold, DangerSquareBroken, DangerSquareBulk, DangerSquareLinear, DangerSquareOutline, DangerSquareTwotone };
