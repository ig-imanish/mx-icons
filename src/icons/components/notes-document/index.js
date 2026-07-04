import NotesDocumentBold from "./NotesDocumentBold";
import NotesDocumentBroken from "./NotesDocumentBroken";
import NotesDocumentBulk from "./NotesDocumentBulk";
import NotesDocumentLinear from "./NotesDocumentLinear";
import NotesDocumentOutline from "./NotesDocumentOutline";
import NotesDocumentTwotone from "./NotesDocumentTwotone";

export { NotesDocumentBold, NotesDocumentBroken, NotesDocumentBulk, NotesDocumentLinear, NotesDocumentOutline, NotesDocumentTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-document-bold",
    Component: NotesDocumentBold,
    componentName: "NotesDocumentBold",
  },,
  {
    variant: "broken",
    slug: "notes-document-broken",
    Component: NotesDocumentBroken,
    componentName: "NotesDocumentBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-document-bulk",
    Component: NotesDocumentBulk,
    componentName: "NotesDocumentBulk",
  },,
  {
    variant: "linear",
    slug: "notes-document-linear",
    Component: NotesDocumentLinear,
    componentName: "NotesDocumentLinear",
  },,
  {
    variant: "outline",
    slug: "notes-document-outline",
    Component: NotesDocumentOutline,
    componentName: "NotesDocumentOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-document-twotone",
    Component: NotesDocumentTwotone,
    componentName: "NotesDocumentTwotone",
  }
];

export default { NotesDocumentBold, NotesDocumentBroken, NotesDocumentBulk, NotesDocumentLinear, NotesDocumentOutline, NotesDocumentTwotone };
