import Note2Bold from "./Note2Bold";
import Note2Broken from "./Note2Broken";
import Note2Bulk from "./Note2Bulk";
import Note2Linear from "./Note2Linear";
import Note2Outline from "./Note2Outline";
import Note2Twotone from "./Note2Twotone";

export { Note2Bold, Note2Broken, Note2Bulk, Note2Linear, Note2Outline, Note2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "note2-bold",
    Component: Note2Bold,
    componentName: "Note2Bold",
  },
  {
    variant: "broken",
    slug: "note2-broken",
    Component: Note2Broken,
    componentName: "Note2Broken",
  },
  {
    variant: "bulk",
    slug: "note2-bulk",
    Component: Note2Bulk,
    componentName: "Note2Bulk",
  },
  {
    variant: "linear",
    slug: "note2-linear",
    Component: Note2Linear,
    componentName: "Note2Linear",
  },
  {
    variant: "outline",
    slug: "note2-outline",
    Component: Note2Outline,
    componentName: "Note2Outline",
  },
  {
    variant: "twotone",
    slug: "note2-twotone",
    Component: Note2Twotone,
    componentName: "Note2Twotone",
  },
];
