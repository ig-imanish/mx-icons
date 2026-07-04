import TranslationBold from "./TranslationBold";
import TranslationBroken from "./TranslationBroken";
import TranslationBulk from "./TranslationBulk";
import TranslationLinear from "./TranslationLinear";
import TranslationOutline from "./TranslationOutline";
import TranslationTwotone from "./TranslationTwotone";

export { TranslationBold, TranslationBroken, TranslationBulk, TranslationLinear, TranslationOutline, TranslationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "translation-bold",
    Component: TranslationBold,
    componentName: "TranslationBold",
  },,
  {
    variant: "broken",
    slug: "translation-broken",
    Component: TranslationBroken,
    componentName: "TranslationBroken",
  },,
  {
    variant: "bulk",
    slug: "translation-bulk",
    Component: TranslationBulk,
    componentName: "TranslationBulk",
  },,
  {
    variant: "linear",
    slug: "translation-linear",
    Component: TranslationLinear,
    componentName: "TranslationLinear",
  },,
  {
    variant: "outline",
    slug: "translation-outline",
    Component: TranslationOutline,
    componentName: "TranslationOutline",
  },,
  {
    variant: "twotone",
    slug: "translation-twotone",
    Component: TranslationTwotone,
    componentName: "TranslationTwotone",
  }
];

export default { TranslationBold, TranslationBroken, TranslationBulk, TranslationLinear, TranslationOutline, TranslationTwotone };
