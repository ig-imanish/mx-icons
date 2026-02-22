import Note21Bold from "./Note21Bold";
import Note21Broken from "./Note21Broken";
import Note21Bulk from "./Note21Bulk";
import Note21Linear from "./Note21Linear";
import Note21Outline from "./Note21Outline";
import Note21Twotone from "./Note21Twotone";

export { Note21Bold, Note21Broken, Note21Bulk, Note21Linear, Note21Outline, Note21Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "note21-bold",
    Component: Note21Bold,
    componentName: "Note21Bold",
  },
  {
    variant: "broken",
    slug: "note21-broken",
    Component: Note21Broken,
    componentName: "Note21Broken",
  },
  {
    variant: "bulk",
    slug: "note21-bulk",
    Component: Note21Bulk,
    componentName: "Note21Bulk",
  },
  {
    variant: "linear",
    slug: "note21-linear",
    Component: Note21Linear,
    componentName: "Note21Linear",
  },
  {
    variant: "outline",
    slug: "note21-outline",
    Component: Note21Outline,
    componentName: "Note21Outline",
  },
  {
    variant: "twotone",
    slug: "note21-twotone",
    Component: Note21Twotone,
    componentName: "Note21Twotone",
  },
];
