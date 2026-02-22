import DocumentNormalBold from "./DocumentNormalBold";
import DocumentNormalBroken from "./DocumentNormalBroken";
import DocumentNormalBulk from "./DocumentNormalBulk";
import DocumentNormalLinear from "./DocumentNormalLinear";
import DocumentNormalOutline from "./DocumentNormalOutline";

export { DocumentNormalBold, DocumentNormalBroken, DocumentNormalBulk, DocumentNormalLinear, DocumentNormalOutline };

export const variants = [
  {
    variant: "bold",
    slug: "document-normal-bold",
    Component: DocumentNormalBold,
    componentName: "DocumentNormalBold",
  },
  {
    variant: "broken",
    slug: "document-normal-broken",
    Component: DocumentNormalBroken,
    componentName: "DocumentNormalBroken",
  },
  {
    variant: "bulk",
    slug: "document-normal-bulk",
    Component: DocumentNormalBulk,
    componentName: "DocumentNormalBulk",
  },
  {
    variant: "linear",
    slug: "document-normal-linear",
    Component: DocumentNormalLinear,
    componentName: "DocumentNormalLinear",
  },
  {
    variant: "outline",
    slug: "document-normal-outline",
    Component: DocumentNormalOutline,
    componentName: "DocumentNormalOutline",
  },
];
