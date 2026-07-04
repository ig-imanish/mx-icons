import EuroBold from "./EuroBold";
import EuroBroken from "./EuroBroken";
import EuroBulk from "./EuroBulk";
import EuroLinear from "./EuroLinear";
import EuroOutline from "./EuroOutline";
import EuroTwotone from "./EuroTwotone";

export { EuroBold, EuroBroken, EuroBulk, EuroLinear, EuroOutline, EuroTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "euro-bold",
    Component: EuroBold,
    componentName: "EuroBold",
  },,
  {
    variant: "broken",
    slug: "euro-broken",
    Component: EuroBroken,
    componentName: "EuroBroken",
  },,
  {
    variant: "bulk",
    slug: "euro-bulk",
    Component: EuroBulk,
    componentName: "EuroBulk",
  },,
  {
    variant: "linear",
    slug: "euro-linear",
    Component: EuroLinear,
    componentName: "EuroLinear",
  },,
  {
    variant: "outline",
    slug: "euro-outline",
    Component: EuroOutline,
    componentName: "EuroOutline",
  },,
  {
    variant: "twotone",
    slug: "euro-twotone",
    Component: EuroTwotone,
    componentName: "EuroTwotone",
  }
];

export default { EuroBold, EuroBroken, EuroBulk, EuroLinear, EuroOutline, EuroTwotone };
