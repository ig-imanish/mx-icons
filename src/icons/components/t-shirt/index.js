import TShirtBold from "./TShirtBold";
import TShirtBroken from "./TShirtBroken";
import TShirtBulk from "./TShirtBulk";
import TShirtLinear from "./TShirtLinear";
import TShirtOutline from "./TShirtOutline";
import TShirtTwotone from "./TShirtTwotone";

export { TShirtBold, TShirtBroken, TShirtBulk, TShirtLinear, TShirtOutline, TShirtTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "t-shirt-bold",
    Component: TShirtBold,
    componentName: "TShirtBold",
  },,
  {
    variant: "broken",
    slug: "t-shirt-broken",
    Component: TShirtBroken,
    componentName: "TShirtBroken",
  },,
  {
    variant: "bulk",
    slug: "t-shirt-bulk",
    Component: TShirtBulk,
    componentName: "TShirtBulk",
  },,
  {
    variant: "linear",
    slug: "t-shirt-linear",
    Component: TShirtLinear,
    componentName: "TShirtLinear",
  },,
  {
    variant: "outline",
    slug: "t-shirt-outline",
    Component: TShirtOutline,
    componentName: "TShirtOutline",
  },,
  {
    variant: "twotone",
    slug: "t-shirt-twotone",
    Component: TShirtTwotone,
    componentName: "TShirtTwotone",
  }
];

export default { TShirtBold, TShirtBroken, TShirtBulk, TShirtLinear, TShirtOutline, TShirtTwotone };
