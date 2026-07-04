import ChecklistBold from "./ChecklistBold";
import ChecklistBroken from "./ChecklistBroken";
import ChecklistBulk from "./ChecklistBulk";
import ChecklistLinear from "./ChecklistLinear";
import ChecklistOutline from "./ChecklistOutline";
import ChecklistTwotone from "./ChecklistTwotone";

export { ChecklistBold, ChecklistBroken, ChecklistBulk, ChecklistLinear, ChecklistOutline, ChecklistTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "checklist-bold",
    Component: ChecklistBold,
    componentName: "ChecklistBold",
  },,
  {
    variant: "broken",
    slug: "checklist-broken",
    Component: ChecklistBroken,
    componentName: "ChecklistBroken",
  },,
  {
    variant: "bulk",
    slug: "checklist-bulk",
    Component: ChecklistBulk,
    componentName: "ChecklistBulk",
  },,
  {
    variant: "linear",
    slug: "checklist-linear",
    Component: ChecklistLinear,
    componentName: "ChecklistLinear",
  },,
  {
    variant: "outline",
    slug: "checklist-outline",
    Component: ChecklistOutline,
    componentName: "ChecklistOutline",
  },,
  {
    variant: "twotone",
    slug: "checklist-twotone",
    Component: ChecklistTwotone,
    componentName: "ChecklistTwotone",
  }
];

export default { ChecklistBold, ChecklistBroken, ChecklistBulk, ChecklistLinear, ChecklistOutline, ChecklistTwotone };
