import DumbbellBold from "./DumbbellBold";
import DumbbellBroken from "./DumbbellBroken";
import DumbbellBulk from "./DumbbellBulk";
import DumbbellLinear from "./DumbbellLinear";
import DumbbellOutline from "./DumbbellOutline";
import DumbbellTwotone from "./DumbbellTwotone";

export { DumbbellBold, DumbbellBroken, DumbbellBulk, DumbbellLinear, DumbbellOutline, DumbbellTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dumbbell-bold",
    Component: DumbbellBold,
    componentName: "DumbbellBold",
  },,
  {
    variant: "broken",
    slug: "dumbbell-broken",
    Component: DumbbellBroken,
    componentName: "DumbbellBroken",
  },,
  {
    variant: "bulk",
    slug: "dumbbell-bulk",
    Component: DumbbellBulk,
    componentName: "DumbbellBulk",
  },,
  {
    variant: "linear",
    slug: "dumbbell-linear",
    Component: DumbbellLinear,
    componentName: "DumbbellLinear",
  },,
  {
    variant: "outline",
    slug: "dumbbell-outline",
    Component: DumbbellOutline,
    componentName: "DumbbellOutline",
  },,
  {
    variant: "twotone",
    slug: "dumbbell-twotone",
    Component: DumbbellTwotone,
    componentName: "DumbbellTwotone",
  }
];

export default { DumbbellBold, DumbbellBroken, DumbbellBulk, DumbbellLinear, DumbbellOutline, DumbbellTwotone };
