import Note1Bold from "./Note1Bold";
import Note1Broken from "./Note1Broken";
import Note1Bulk from "./Note1Bulk";
import Note1Linear from "./Note1Linear";
import Note1Outline from "./Note1Outline";
import Note1Twotone from "./Note1Twotone";

export { Note1Bold, Note1Broken, Note1Bulk, Note1Linear, Note1Outline, Note1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "note1-bold",
    Component: Note1Bold,
    componentName: "Note1Bold",
  },
  {
    variant: "broken",
    slug: "note1-broken",
    Component: Note1Broken,
    componentName: "Note1Broken",
  },
  {
    variant: "bulk",
    slug: "note1-bulk",
    Component: Note1Bulk,
    componentName: "Note1Bulk",
  },
  {
    variant: "linear",
    slug: "note1-linear",
    Component: Note1Linear,
    componentName: "Note1Linear",
  },
  {
    variant: "outline",
    slug: "note1-outline",
    Component: Note1Outline,
    componentName: "Note1Outline",
  },
  {
    variant: "twotone",
    slug: "note1-twotone",
    Component: Note1Twotone,
    componentName: "Note1Twotone",
  },
];
