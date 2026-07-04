import ConditionerBold from "./ConditionerBold";
import ConditionerBroken from "./ConditionerBroken";
import ConditionerBulk from "./ConditionerBulk";
import ConditionerLinear from "./ConditionerLinear";
import ConditionerOutline from "./ConditionerOutline";
import ConditionerTwotone from "./ConditionerTwotone";

export { ConditionerBold, ConditionerBroken, ConditionerBulk, ConditionerLinear, ConditionerOutline, ConditionerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "conditioner-bold",
    Component: ConditionerBold,
    componentName: "ConditionerBold",
  },,
  {
    variant: "broken",
    slug: "conditioner-broken",
    Component: ConditionerBroken,
    componentName: "ConditionerBroken",
  },,
  {
    variant: "bulk",
    slug: "conditioner-bulk",
    Component: ConditionerBulk,
    componentName: "ConditionerBulk",
  },,
  {
    variant: "linear",
    slug: "conditioner-linear",
    Component: ConditionerLinear,
    componentName: "ConditionerLinear",
  },,
  {
    variant: "outline",
    slug: "conditioner-outline",
    Component: ConditionerOutline,
    componentName: "ConditionerOutline",
  },,
  {
    variant: "twotone",
    slug: "conditioner-twotone",
    Component: ConditionerTwotone,
    componentName: "ConditionerTwotone",
  }
];

export default { ConditionerBold, ConditionerBroken, ConditionerBulk, ConditionerLinear, ConditionerOutline, ConditionerTwotone };
