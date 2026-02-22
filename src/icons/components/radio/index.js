import RadioBold from "./RadioBold";
import RadioBroken from "./RadioBroken";
import RadioBulk from "./RadioBulk";
import RadioLinear from "./RadioLinear";
import RadioOutline from "./RadioOutline";
import RadioTwotone from "./RadioTwotone";

export { RadioBold, RadioBroken, RadioBulk, RadioLinear, RadioOutline, RadioTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "radio-bold",
    Component: RadioBold,
    componentName: "RadioBold",
  },
  {
    variant: "broken",
    slug: "radio-broken",
    Component: RadioBroken,
    componentName: "RadioBroken",
  },
  {
    variant: "bulk",
    slug: "radio-bulk",
    Component: RadioBulk,
    componentName: "RadioBulk",
  },
  {
    variant: "linear",
    slug: "radio-linear",
    Component: RadioLinear,
    componentName: "RadioLinear",
  },
  {
    variant: "outline",
    slug: "radio-outline",
    Component: RadioOutline,
    componentName: "RadioOutline",
  },
  {
    variant: "twotone",
    slug: "radio-twotone",
    Component: RadioTwotone,
    componentName: "RadioTwotone",
  },
];
