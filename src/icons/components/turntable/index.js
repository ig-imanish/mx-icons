import TurntableBold from "./TurntableBold";
import TurntableBroken from "./TurntableBroken";
import TurntableBulk from "./TurntableBulk";
import TurntableLinear from "./TurntableLinear";
import TurntableOutline from "./TurntableOutline";
import TurntableTwotone from "./TurntableTwotone";

export { TurntableBold, TurntableBroken, TurntableBulk, TurntableLinear, TurntableOutline, TurntableTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "turntable-bold",
    Component: TurntableBold,
    componentName: "TurntableBold",
  },,
  {
    variant: "broken",
    slug: "turntable-broken",
    Component: TurntableBroken,
    componentName: "TurntableBroken",
  },,
  {
    variant: "bulk",
    slug: "turntable-bulk",
    Component: TurntableBulk,
    componentName: "TurntableBulk",
  },,
  {
    variant: "linear",
    slug: "turntable-linear",
    Component: TurntableLinear,
    componentName: "TurntableLinear",
  },,
  {
    variant: "outline",
    slug: "turntable-outline",
    Component: TurntableOutline,
    componentName: "TurntableOutline",
  },,
  {
    variant: "twotone",
    slug: "turntable-twotone",
    Component: TurntableTwotone,
    componentName: "TurntableTwotone",
  }
];

export default { TurntableBold, TurntableBroken, TurntableBulk, TurntableLinear, TurntableOutline, TurntableTwotone };
