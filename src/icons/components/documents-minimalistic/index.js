import DocumentsMinimalisticBold from "./DocumentsMinimalisticBold";
import DocumentsMinimalisticBroken from "./DocumentsMinimalisticBroken";
import DocumentsMinimalisticBulk from "./DocumentsMinimalisticBulk";
import DocumentsMinimalisticLinear from "./DocumentsMinimalisticLinear";
import DocumentsMinimalisticOutline from "./DocumentsMinimalisticOutline";
import DocumentsMinimalisticTwotone from "./DocumentsMinimalisticTwotone";

export { DocumentsMinimalisticBold, DocumentsMinimalisticBroken, DocumentsMinimalisticBulk, DocumentsMinimalisticLinear, DocumentsMinimalisticOutline, DocumentsMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "documents-minimalistic-bold",
    Component: DocumentsMinimalisticBold,
    componentName: "DocumentsMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "documents-minimalistic-broken",
    Component: DocumentsMinimalisticBroken,
    componentName: "DocumentsMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "documents-minimalistic-bulk",
    Component: DocumentsMinimalisticBulk,
    componentName: "DocumentsMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "documents-minimalistic-linear",
    Component: DocumentsMinimalisticLinear,
    componentName: "DocumentsMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "documents-minimalistic-outline",
    Component: DocumentsMinimalisticOutline,
    componentName: "DocumentsMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "documents-minimalistic-twotone",
    Component: DocumentsMinimalisticTwotone,
    componentName: "DocumentsMinimalisticTwotone",
  }
];

export default { DocumentsMinimalisticBold, DocumentsMinimalisticBroken, DocumentsMinimalisticBulk, DocumentsMinimalisticLinear, DocumentsMinimalisticOutline, DocumentsMinimalisticTwotone };
