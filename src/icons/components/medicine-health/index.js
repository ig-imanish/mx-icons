import MedicineHealthBold from "./MedicineHealthBold";
import MedicineHealthBroken from "./MedicineHealthBroken";
import MedicineHealthBulk from "./MedicineHealthBulk";
import MedicineHealthLinear from "./MedicineHealthLinear";
import MedicineHealthOutline from "./MedicineHealthOutline";
import MedicineHealthTwotone from "./MedicineHealthTwotone";

export { MedicineHealthBold, MedicineHealthBroken, MedicineHealthBulk, MedicineHealthLinear, MedicineHealthOutline, MedicineHealthTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medicine-health-bold",
    Component: MedicineHealthBold,
    componentName: "MedicineHealthBold",
  },,
  {
    variant: "broken",
    slug: "medicine-health-broken",
    Component: MedicineHealthBroken,
    componentName: "MedicineHealthBroken",
  },,
  {
    variant: "bulk",
    slug: "medicine-health-bulk",
    Component: MedicineHealthBulk,
    componentName: "MedicineHealthBulk",
  },,
  {
    variant: "linear",
    slug: "medicine-health-linear",
    Component: MedicineHealthLinear,
    componentName: "MedicineHealthLinear",
  },,
  {
    variant: "outline",
    slug: "medicine-health-outline",
    Component: MedicineHealthOutline,
    componentName: "MedicineHealthOutline",
  },,
  {
    variant: "twotone",
    slug: "medicine-health-twotone",
    Component: MedicineHealthTwotone,
    componentName: "MedicineHealthTwotone",
  }
];

export default { MedicineHealthBold, MedicineHealthBroken, MedicineHealthBulk, MedicineHealthLinear, MedicineHealthOutline, MedicineHealthTwotone };
