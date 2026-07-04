import RoundedMagnifierBold from "./RoundedMagnifierBold";
import RoundedMagnifierBroken from "./RoundedMagnifierBroken";
import RoundedMagnifierBulk from "./RoundedMagnifierBulk";
import RoundedMagnifierLinear from "./RoundedMagnifierLinear";
import RoundedMagnifierOutline from "./RoundedMagnifierOutline";
import RoundedMagnifierTwotone from "./RoundedMagnifierTwotone";

export { RoundedMagnifierBold, RoundedMagnifierBroken, RoundedMagnifierBulk, RoundedMagnifierLinear, RoundedMagnifierOutline, RoundedMagnifierTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rounded-magnifier-bold",
    Component: RoundedMagnifierBold,
    componentName: "RoundedMagnifierBold",
  },,
  {
    variant: "broken",
    slug: "rounded-magnifier-broken",
    Component: RoundedMagnifierBroken,
    componentName: "RoundedMagnifierBroken",
  },,
  {
    variant: "bulk",
    slug: "rounded-magnifier-bulk",
    Component: RoundedMagnifierBulk,
    componentName: "RoundedMagnifierBulk",
  },,
  {
    variant: "linear",
    slug: "rounded-magnifier-linear",
    Component: RoundedMagnifierLinear,
    componentName: "RoundedMagnifierLinear",
  },,
  {
    variant: "outline",
    slug: "rounded-magnifier-outline",
    Component: RoundedMagnifierOutline,
    componentName: "RoundedMagnifierOutline",
  },,
  {
    variant: "twotone",
    slug: "rounded-magnifier-twotone",
    Component: RoundedMagnifierTwotone,
    componentName: "RoundedMagnifierTwotone",
  }
];

export default { RoundedMagnifierBold, RoundedMagnifierBroken, RoundedMagnifierBulk, RoundedMagnifierLinear, RoundedMagnifierOutline, RoundedMagnifierTwotone };
