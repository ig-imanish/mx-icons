import TranslateBold from "./TranslateBold";
import TranslateBroken from "./TranslateBroken";
import TranslateBulk from "./TranslateBulk";
import TranslateLinear from "./TranslateLinear";
import TranslateOutline from "./TranslateOutline";
import TranslateTwotone from "./TranslateTwotone";

export { TranslateBold, TranslateBroken, TranslateBulk, TranslateLinear, TranslateOutline, TranslateTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "translate-bold",
    Component: TranslateBold,
    componentName: "TranslateBold",
  },
  {
    variant: "broken",
    slug: "translate-broken",
    Component: TranslateBroken,
    componentName: "TranslateBroken",
  },
  {
    variant: "bulk",
    slug: "translate-bulk",
    Component: TranslateBulk,
    componentName: "TranslateBulk",
  },
  {
    variant: "linear",
    slug: "translate-linear",
    Component: TranslateLinear,
    componentName: "TranslateLinear",
  },
  {
    variant: "outline",
    slug: "translate-outline",
    Component: TranslateOutline,
    componentName: "TranslateOutline",
  },
  {
    variant: "twotone",
    slug: "translate-twotone",
    Component: TranslateTwotone,
    componentName: "TranslateTwotone",
  },
];
