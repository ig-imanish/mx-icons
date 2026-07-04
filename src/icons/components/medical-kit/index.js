import MedicalKitBold from "./MedicalKitBold";
import MedicalKitBroken from "./MedicalKitBroken";
import MedicalKitBulk from "./MedicalKitBulk";
import MedicalKitLinear from "./MedicalKitLinear";
import MedicalKitOutline from "./MedicalKitOutline";
import MedicalKitTwotone from "./MedicalKitTwotone";

export { MedicalKitBold, MedicalKitBroken, MedicalKitBulk, MedicalKitLinear, MedicalKitOutline, MedicalKitTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "medical-kit-bold",
    Component: MedicalKitBold,
    componentName: "MedicalKitBold",
  },,
  {
    variant: "broken",
    slug: "medical-kit-broken",
    Component: MedicalKitBroken,
    componentName: "MedicalKitBroken",
  },,
  {
    variant: "bulk",
    slug: "medical-kit-bulk",
    Component: MedicalKitBulk,
    componentName: "MedicalKitBulk",
  },,
  {
    variant: "linear",
    slug: "medical-kit-linear",
    Component: MedicalKitLinear,
    componentName: "MedicalKitLinear",
  },,
  {
    variant: "outline",
    slug: "medical-kit-outline",
    Component: MedicalKitOutline,
    componentName: "MedicalKitOutline",
  },,
  {
    variant: "twotone",
    slug: "medical-kit-twotone",
    Component: MedicalKitTwotone,
    componentName: "MedicalKitTwotone",
  }
];

export default { MedicalKitBold, MedicalKitBroken, MedicalKitBulk, MedicalKitLinear, MedicalKitOutline, MedicalKitTwotone };
