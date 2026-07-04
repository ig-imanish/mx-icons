import DropperBold from "./DropperBold";
import DropperBroken from "./DropperBroken";
import DropperBulk from "./DropperBulk";
import DropperLinear from "./DropperLinear";
import DropperOutline from "./DropperOutline";
import DropperTwotone from "./DropperTwotone";

export { DropperBold, DropperBroken, DropperBulk, DropperLinear, DropperOutline, DropperTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dropper-bold",
    Component: DropperBold,
    componentName: "DropperBold",
  },,
  {
    variant: "broken",
    slug: "dropper-broken",
    Component: DropperBroken,
    componentName: "DropperBroken",
  },,
  {
    variant: "bulk",
    slug: "dropper-bulk",
    Component: DropperBulk,
    componentName: "DropperBulk",
  },,
  {
    variant: "linear",
    slug: "dropper-linear",
    Component: DropperLinear,
    componentName: "DropperLinear",
  },,
  {
    variant: "outline",
    slug: "dropper-outline",
    Component: DropperOutline,
    componentName: "DropperOutline",
  },,
  {
    variant: "twotone",
    slug: "dropper-twotone",
    Component: DropperTwotone,
    componentName: "DropperTwotone",
  }
];

export default { DropperBold, DropperBroken, DropperBulk, DropperLinear, DropperOutline, DropperTwotone };
