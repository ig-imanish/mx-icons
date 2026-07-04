import NotesDocumentTextBold from "./NotesDocumentTextBold";
import NotesDocumentTextBroken from "./NotesDocumentTextBroken";
import NotesDocumentTextBulk from "./NotesDocumentTextBulk";
import NotesDocumentTextLinear from "./NotesDocumentTextLinear";
import NotesDocumentTextOutline from "./NotesDocumentTextOutline";
import NotesDocumentTextTwotone from "./NotesDocumentTextTwotone";

export { NotesDocumentTextBold, NotesDocumentTextBroken, NotesDocumentTextBulk, NotesDocumentTextLinear, NotesDocumentTextOutline, NotesDocumentTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-document-text-bold",
    Component: NotesDocumentTextBold,
    componentName: "NotesDocumentTextBold",
  },,
  {
    variant: "broken",
    slug: "notes-document-text-broken",
    Component: NotesDocumentTextBroken,
    componentName: "NotesDocumentTextBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-document-text-bulk",
    Component: NotesDocumentTextBulk,
    componentName: "NotesDocumentTextBulk",
  },,
  {
    variant: "linear",
    slug: "notes-document-text-linear",
    Component: NotesDocumentTextLinear,
    componentName: "NotesDocumentTextLinear",
  },,
  {
    variant: "outline",
    slug: "notes-document-text-outline",
    Component: NotesDocumentTextOutline,
    componentName: "NotesDocumentTextOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-document-text-twotone",
    Component: NotesDocumentTextTwotone,
    componentName: "NotesDocumentTextTwotone",
  }
];

export default { NotesDocumentTextBold, NotesDocumentTextBroken, NotesDocumentTextBulk, NotesDocumentTextLinear, NotesDocumentTextOutline, NotesDocumentTextTwotone };
