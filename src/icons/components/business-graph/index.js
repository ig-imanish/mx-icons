import BusinessGraphBold from "./BusinessGraphBold";
import BusinessGraphBroken from "./BusinessGraphBroken";
import BusinessGraphBulk from "./BusinessGraphBulk";
import BusinessGraphLinear from "./BusinessGraphLinear";
import BusinessGraphOutline from "./BusinessGraphOutline";
import BusinessGraphTwotone from "./BusinessGraphTwotone";

export { BusinessGraphBold, BusinessGraphBroken, BusinessGraphBulk, BusinessGraphLinear, BusinessGraphOutline, BusinessGraphTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "business-graph-bold",
    Component: BusinessGraphBold,
    componentName: "BusinessGraphBold",
  },,
  {
    variant: "broken",
    slug: "business-graph-broken",
    Component: BusinessGraphBroken,
    componentName: "BusinessGraphBroken",
  },,
  {
    variant: "bulk",
    slug: "business-graph-bulk",
    Component: BusinessGraphBulk,
    componentName: "BusinessGraphBulk",
  },,
  {
    variant: "linear",
    slug: "business-graph-linear",
    Component: BusinessGraphLinear,
    componentName: "BusinessGraphLinear",
  },,
  {
    variant: "outline",
    slug: "business-graph-outline",
    Component: BusinessGraphOutline,
    componentName: "BusinessGraphOutline",
  },,
  {
    variant: "twotone",
    slug: "business-graph-twotone",
    Component: BusinessGraphTwotone,
    componentName: "BusinessGraphTwotone",
  }
];

export default { BusinessGraphBold, BusinessGraphBroken, BusinessGraphBulk, BusinessGraphLinear, BusinessGraphOutline, BusinessGraphTwotone };
