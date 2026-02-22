import DocumentCloudBold from "./DocumentCloudBold";
import DocumentCloudBroken from "./DocumentCloudBroken";
import DocumentCloudBulk from "./DocumentCloudBulk";
import DocumentCloudLinear from "./DocumentCloudLinear";
import DocumentCloudOutline from "./DocumentCloudOutline";
import DocumentCloudTwotone from "./DocumentCloudTwotone";

export { DocumentCloudBold, DocumentCloudBroken, DocumentCloudBulk, DocumentCloudLinear, DocumentCloudOutline, DocumentCloudTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-cloud-bold",
    Component: DocumentCloudBold,
    componentName: "DocumentCloudBold",
  },
  {
    variant: "broken",
    slug: "document-cloud-broken",
    Component: DocumentCloudBroken,
    componentName: "DocumentCloudBroken",
  },
  {
    variant: "bulk",
    slug: "document-cloud-bulk",
    Component: DocumentCloudBulk,
    componentName: "DocumentCloudBulk",
  },
  {
    variant: "linear",
    slug: "document-cloud-linear",
    Component: DocumentCloudLinear,
    componentName: "DocumentCloudLinear",
  },
  {
    variant: "outline",
    slug: "document-cloud-outline",
    Component: DocumentCloudOutline,
    componentName: "DocumentCloudOutline",
  },
  {
    variant: "twotone",
    slug: "document-cloud-twotone",
    Component: DocumentCloudTwotone,
    componentName: "DocumentCloudTwotone",
  },
];
