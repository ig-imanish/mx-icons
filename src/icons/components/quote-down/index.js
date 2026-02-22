import QuoteDownBold from "./QuoteDownBold";
import QuoteDownBroken from "./QuoteDownBroken";
import QuoteDownBulk from "./QuoteDownBulk";
import QuoteDownLinear from "./QuoteDownLinear";
import QuoteDownOutline from "./QuoteDownOutline";
import QuoteDownTwotone from "./QuoteDownTwotone";

export { QuoteDownBold, QuoteDownBroken, QuoteDownBulk, QuoteDownLinear, QuoteDownOutline, QuoteDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "quote-down-bold",
    Component: QuoteDownBold,
    componentName: "QuoteDownBold",
  },
  {
    variant: "broken",
    slug: "quote-down-broken",
    Component: QuoteDownBroken,
    componentName: "QuoteDownBroken",
  },
  {
    variant: "bulk",
    slug: "quote-down-bulk",
    Component: QuoteDownBulk,
    componentName: "QuoteDownBulk",
  },
  {
    variant: "linear",
    slug: "quote-down-linear",
    Component: QuoteDownLinear,
    componentName: "QuoteDownLinear",
  },
  {
    variant: "outline",
    slug: "quote-down-outline",
    Component: QuoteDownOutline,
    componentName: "QuoteDownOutline",
  },
  {
    variant: "twotone",
    slug: "quote-down-twotone",
    Component: QuoteDownTwotone,
    componentName: "QuoteDownTwotone",
  },
];
