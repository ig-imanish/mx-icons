import HandPillsBold from "./HandPillsBold";
import HandPillsBroken from "./HandPillsBroken";
import HandPillsBulk from "./HandPillsBulk";
import HandPillsLinear from "./HandPillsLinear";
import HandPillsOutline from "./HandPillsOutline";
import HandPillsTwotone from "./HandPillsTwotone";

export { HandPillsBold, HandPillsBroken, HandPillsBulk, HandPillsLinear, HandPillsOutline, HandPillsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hand-pills-bold",
    Component: HandPillsBold,
    componentName: "HandPillsBold",
  },,
  {
    variant: "broken",
    slug: "hand-pills-broken",
    Component: HandPillsBroken,
    componentName: "HandPillsBroken",
  },,
  {
    variant: "bulk",
    slug: "hand-pills-bulk",
    Component: HandPillsBulk,
    componentName: "HandPillsBulk",
  },,
  {
    variant: "linear",
    slug: "hand-pills-linear",
    Component: HandPillsLinear,
    componentName: "HandPillsLinear",
  },,
  {
    variant: "outline",
    slug: "hand-pills-outline",
    Component: HandPillsOutline,
    componentName: "HandPillsOutline",
  },,
  {
    variant: "twotone",
    slug: "hand-pills-twotone",
    Component: HandPillsTwotone,
    componentName: "HandPillsTwotone",
  }
];

export default { HandPillsBold, HandPillsBroken, HandPillsBulk, HandPillsLinear, HandPillsOutline, HandPillsTwotone };
