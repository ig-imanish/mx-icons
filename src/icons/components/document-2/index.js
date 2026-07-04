import Document2Bold from "./Document2Bold";
import Document2Broken from "./Document2Broken";
import Document2Bulk from "./Document2Bulk";
import Document2Linear from "./Document2Linear";
import Document2Outline from "./Document2Outline";
import Document2Twotone from "./Document2Twotone";

export { Document2Bold, Document2Broken, Document2Bulk, Document2Linear, Document2Outline, Document2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-2-bold",
    Component: Document2Bold,
    componentName: "Document2Bold",
  },,
  {
    variant: "broken",
    slug: "document-2-broken",
    Component: Document2Broken,
    componentName: "Document2Broken",
  },,
  {
    variant: "bulk",
    slug: "document-2-bulk",
    Component: Document2Bulk,
    componentName: "Document2Bulk",
  },,
  {
    variant: "linear",
    slug: "document-2-linear",
    Component: Document2Linear,
    componentName: "Document2Linear",
  },,
  {
    variant: "outline",
    slug: "document-2-outline",
    Component: Document2Outline,
    componentName: "Document2Outline",
  },,
  {
    variant: "twotone",
    slug: "document-2-twotone",
    Component: Document2Twotone,
    componentName: "Document2Twotone",
  }
];

export default { Document2Bold, Document2Broken, Document2Bulk, Document2Linear, Document2Outline, Document2Twotone };
