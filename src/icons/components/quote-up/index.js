import QuoteUpBold from "./QuoteUpBold";
import QuoteUpBroken from "./QuoteUpBroken";
import QuoteUpBulk from "./QuoteUpBulk";
import QuoteUpLinear from "./QuoteUpLinear";
import QuoteUpOutline from "./QuoteUpOutline";
import QuoteUpTwotone from "./QuoteUpTwotone";

export { QuoteUpBold, QuoteUpBroken, QuoteUpBulk, QuoteUpLinear, QuoteUpOutline, QuoteUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "quote-up-bold",
    Component: QuoteUpBold,
    componentName: "QuoteUpBold",
  },
  {
    variant: "broken",
    slug: "quote-up-broken",
    Component: QuoteUpBroken,
    componentName: "QuoteUpBroken",
  },
  {
    variant: "bulk",
    slug: "quote-up-bulk",
    Component: QuoteUpBulk,
    componentName: "QuoteUpBulk",
  },
  {
    variant: "linear",
    slug: "quote-up-linear",
    Component: QuoteUpLinear,
    componentName: "QuoteUpLinear",
  },
  {
    variant: "outline",
    slug: "quote-up-outline",
    Component: QuoteUpOutline,
    componentName: "QuoteUpOutline",
  },
  {
    variant: "twotone",
    slug: "quote-up-twotone",
    Component: QuoteUpTwotone,
    componentName: "QuoteUpTwotone",
  },
];
