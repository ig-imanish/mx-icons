import SkirtBold from "./SkirtBold";
import SkirtBroken from "./SkirtBroken";
import SkirtBulk from "./SkirtBulk";
import SkirtLinear from "./SkirtLinear";
import SkirtOutline from "./SkirtOutline";
import SkirtTwotone from "./SkirtTwotone";

export { SkirtBold, SkirtBroken, SkirtBulk, SkirtLinear, SkirtOutline, SkirtTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "skirt-bold",
    Component: SkirtBold,
    componentName: "SkirtBold",
  },,
  {
    variant: "broken",
    slug: "skirt-broken",
    Component: SkirtBroken,
    componentName: "SkirtBroken",
  },,
  {
    variant: "bulk",
    slug: "skirt-bulk",
    Component: SkirtBulk,
    componentName: "SkirtBulk",
  },,
  {
    variant: "linear",
    slug: "skirt-linear",
    Component: SkirtLinear,
    componentName: "SkirtLinear",
  },,
  {
    variant: "outline",
    slug: "skirt-outline",
    Component: SkirtOutline,
    componentName: "SkirtOutline",
  },,
  {
    variant: "twotone",
    slug: "skirt-twotone",
    Component: SkirtTwotone,
    componentName: "SkirtTwotone",
  }
];

export default { SkirtBold, SkirtBroken, SkirtBulk, SkirtLinear, SkirtOutline, SkirtTwotone };
