import SignpostBold from "./SignpostBold";
import SignpostBroken from "./SignpostBroken";
import SignpostBulk from "./SignpostBulk";
import SignpostLinear from "./SignpostLinear";
import SignpostOutline from "./SignpostOutline";
import SignpostTwotone from "./SignpostTwotone";

export { SignpostBold, SignpostBroken, SignpostBulk, SignpostLinear, SignpostOutline, SignpostTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "signpost-bold",
    Component: SignpostBold,
    componentName: "SignpostBold",
  },
  {
    variant: "broken",
    slug: "signpost-broken",
    Component: SignpostBroken,
    componentName: "SignpostBroken",
  },
  {
    variant: "bulk",
    slug: "signpost-bulk",
    Component: SignpostBulk,
    componentName: "SignpostBulk",
  },
  {
    variant: "linear",
    slug: "signpost-linear",
    Component: SignpostLinear,
    componentName: "SignpostLinear",
  },
  {
    variant: "outline",
    slug: "signpost-outline",
    Component: SignpostOutline,
    componentName: "SignpostOutline",
  },
  {
    variant: "twotone",
    slug: "signpost-twotone",
    Component: SignpostTwotone,
    componentName: "SignpostTwotone",
  },
];
