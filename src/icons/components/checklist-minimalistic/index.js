import ChecklistMinimalisticBold from "./ChecklistMinimalisticBold";
import ChecklistMinimalisticBroken from "./ChecklistMinimalisticBroken";
import ChecklistMinimalisticBulk from "./ChecklistMinimalisticBulk";
import ChecklistMinimalisticLinear from "./ChecklistMinimalisticLinear";
import ChecklistMinimalisticOutline from "./ChecklistMinimalisticOutline";
import ChecklistMinimalisticTwotone from "./ChecklistMinimalisticTwotone";

export { ChecklistMinimalisticBold, ChecklistMinimalisticBroken, ChecklistMinimalisticBulk, ChecklistMinimalisticLinear, ChecklistMinimalisticOutline, ChecklistMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "checklist-minimalistic-bold",
    Component: ChecklistMinimalisticBold,
    componentName: "ChecklistMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "checklist-minimalistic-broken",
    Component: ChecklistMinimalisticBroken,
    componentName: "ChecklistMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "checklist-minimalistic-bulk",
    Component: ChecklistMinimalisticBulk,
    componentName: "ChecklistMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "checklist-minimalistic-linear",
    Component: ChecklistMinimalisticLinear,
    componentName: "ChecklistMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "checklist-minimalistic-outline",
    Component: ChecklistMinimalisticOutline,
    componentName: "ChecklistMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "checklist-minimalistic-twotone",
    Component: ChecklistMinimalisticTwotone,
    componentName: "ChecklistMinimalisticTwotone",
  }
];

export default { ChecklistMinimalisticBold, ChecklistMinimalisticBroken, ChecklistMinimalisticBulk, ChecklistMinimalisticLinear, ChecklistMinimalisticOutline, ChecklistMinimalisticTwotone };
