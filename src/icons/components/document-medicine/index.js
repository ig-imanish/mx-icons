import DocumentMedicineBold from "./DocumentMedicineBold";
import DocumentMedicineBroken from "./DocumentMedicineBroken";
import DocumentMedicineBulk from "./DocumentMedicineBulk";
import DocumentMedicineLinear from "./DocumentMedicineLinear";
import DocumentMedicineOutline from "./DocumentMedicineOutline";
import DocumentMedicineTwotone from "./DocumentMedicineTwotone";

export { DocumentMedicineBold, DocumentMedicineBroken, DocumentMedicineBulk, DocumentMedicineLinear, DocumentMedicineOutline, DocumentMedicineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-medicine-bold",
    Component: DocumentMedicineBold,
    componentName: "DocumentMedicineBold",
  },,
  {
    variant: "broken",
    slug: "document-medicine-broken",
    Component: DocumentMedicineBroken,
    componentName: "DocumentMedicineBroken",
  },,
  {
    variant: "bulk",
    slug: "document-medicine-bulk",
    Component: DocumentMedicineBulk,
    componentName: "DocumentMedicineBulk",
  },,
  {
    variant: "linear",
    slug: "document-medicine-linear",
    Component: DocumentMedicineLinear,
    componentName: "DocumentMedicineLinear",
  },,
  {
    variant: "outline",
    slug: "document-medicine-outline",
    Component: DocumentMedicineOutline,
    componentName: "DocumentMedicineOutline",
  },,
  {
    variant: "twotone",
    slug: "document-medicine-twotone",
    Component: DocumentMedicineTwotone,
    componentName: "DocumentMedicineTwotone",
  }
];

export default { DocumentMedicineBold, DocumentMedicineBroken, DocumentMedicineBulk, DocumentMedicineLinear, DocumentMedicineOutline, DocumentMedicineTwotone };
