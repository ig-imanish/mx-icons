import CallMedicineBold from "./CallMedicineBold";
import CallMedicineBroken from "./CallMedicineBroken";
import CallMedicineBulk from "./CallMedicineBulk";
import CallMedicineLinear from "./CallMedicineLinear";
import CallMedicineOutline from "./CallMedicineOutline";
import CallMedicineTwotone from "./CallMedicineTwotone";

export { CallMedicineBold, CallMedicineBroken, CallMedicineBulk, CallMedicineLinear, CallMedicineOutline, CallMedicineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-medicine-bold",
    Component: CallMedicineBold,
    componentName: "CallMedicineBold",
  },,
  {
    variant: "broken",
    slug: "call-medicine-broken",
    Component: CallMedicineBroken,
    componentName: "CallMedicineBroken",
  },,
  {
    variant: "bulk",
    slug: "call-medicine-bulk",
    Component: CallMedicineBulk,
    componentName: "CallMedicineBulk",
  },,
  {
    variant: "linear",
    slug: "call-medicine-linear",
    Component: CallMedicineLinear,
    componentName: "CallMedicineLinear",
  },,
  {
    variant: "outline",
    slug: "call-medicine-outline",
    Component: CallMedicineOutline,
    componentName: "CallMedicineOutline",
  },,
  {
    variant: "twotone",
    slug: "call-medicine-twotone",
    Component: CallMedicineTwotone,
    componentName: "CallMedicineTwotone",
  }
];

export default { CallMedicineBold, CallMedicineBroken, CallMedicineBulk, CallMedicineLinear, CallMedicineOutline, CallMedicineTwotone };
