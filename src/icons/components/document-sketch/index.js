import DocumentSketchBold from "./DocumentSketchBold";
import DocumentSketchBroken from "./DocumentSketchBroken";
import DocumentSketchBulk from "./DocumentSketchBulk";
import DocumentSketchLinear from "./DocumentSketchLinear";
import DocumentSketchOutline from "./DocumentSketchOutline";
import DocumentSketchTwotone from "./DocumentSketchTwotone";

export { DocumentSketchBold, DocumentSketchBroken, DocumentSketchBulk, DocumentSketchLinear, DocumentSketchOutline, DocumentSketchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-sketch-bold",
    Component: DocumentSketchBold,
    componentName: "DocumentSketchBold",
  },
  {
    variant: "broken",
    slug: "document-sketch-broken",
    Component: DocumentSketchBroken,
    componentName: "DocumentSketchBroken",
  },
  {
    variant: "bulk",
    slug: "document-sketch-bulk",
    Component: DocumentSketchBulk,
    componentName: "DocumentSketchBulk",
  },
  {
    variant: "linear",
    slug: "document-sketch-linear",
    Component: DocumentSketchLinear,
    componentName: "DocumentSketchLinear",
  },
  {
    variant: "outline",
    slug: "document-sketch-outline",
    Component: DocumentSketchOutline,
    componentName: "DocumentSketchOutline",
  },
  {
    variant: "twotone",
    slug: "document-sketch-twotone",
    Component: DocumentSketchTwotone,
    componentName: "DocumentSketchTwotone",
  },
];
