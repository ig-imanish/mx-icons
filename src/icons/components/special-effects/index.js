import SpecialEffectsBold from "./SpecialEffectsBold";
import SpecialEffectsBroken from "./SpecialEffectsBroken";
import SpecialEffectsBulk from "./SpecialEffectsBulk";
import SpecialEffectsLinear from "./SpecialEffectsLinear";
import SpecialEffectsOutline from "./SpecialEffectsOutline";
import SpecialEffectsTwotone from "./SpecialEffectsTwotone";

export { SpecialEffectsBold, SpecialEffectsBroken, SpecialEffectsBulk, SpecialEffectsLinear, SpecialEffectsOutline, SpecialEffectsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "special-effects-bold",
    Component: SpecialEffectsBold,
    componentName: "SpecialEffectsBold",
  },,
  {
    variant: "broken",
    slug: "special-effects-broken",
    Component: SpecialEffectsBroken,
    componentName: "SpecialEffectsBroken",
  },,
  {
    variant: "bulk",
    slug: "special-effects-bulk",
    Component: SpecialEffectsBulk,
    componentName: "SpecialEffectsBulk",
  },,
  {
    variant: "linear",
    slug: "special-effects-linear",
    Component: SpecialEffectsLinear,
    componentName: "SpecialEffectsLinear",
  },,
  {
    variant: "outline",
    slug: "special-effects-outline",
    Component: SpecialEffectsOutline,
    componentName: "SpecialEffectsOutline",
  },,
  {
    variant: "twotone",
    slug: "special-effects-twotone",
    Component: SpecialEffectsTwotone,
    componentName: "SpecialEffectsTwotone",
  }
];

export default { SpecialEffectsBold, SpecialEffectsBroken, SpecialEffectsBulk, SpecialEffectsLinear, SpecialEffectsOutline, SpecialEffectsTwotone };
