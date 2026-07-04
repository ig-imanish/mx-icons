import MagnifierBold from "./MagnifierBold";
import MagnifierBroken from "./MagnifierBroken";
import MagnifierBulk from "./MagnifierBulk";
import MagnifierLinear from "./MagnifierLinear";
import MagnifierOutline from "./MagnifierOutline";
import MagnifierTwotone from "./MagnifierTwotone";

export { MagnifierBold, MagnifierBroken, MagnifierBulk, MagnifierLinear, MagnifierOutline, MagnifierTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "magnifier-bold",
    Component: MagnifierBold,
    componentName: "MagnifierBold",
  },,
  {
    variant: "broken",
    slug: "magnifier-broken",
    Component: MagnifierBroken,
    componentName: "MagnifierBroken",
  },,
  {
    variant: "bulk",
    slug: "magnifier-bulk",
    Component: MagnifierBulk,
    componentName: "MagnifierBulk",
  },,
  {
    variant: "linear",
    slug: "magnifier-linear",
    Component: MagnifierLinear,
    componentName: "MagnifierLinear",
  },,
  {
    variant: "outline",
    slug: "magnifier-outline",
    Component: MagnifierOutline,
    componentName: "MagnifierOutline",
  },,
  {
    variant: "twotone",
    slug: "magnifier-twotone",
    Component: MagnifierTwotone,
    componentName: "MagnifierTwotone",
  }
];

export default { MagnifierBold, MagnifierBroken, MagnifierBulk, MagnifierLinear, MagnifierOutline, MagnifierTwotone };
