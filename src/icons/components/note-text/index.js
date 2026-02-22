import NoteTextBold from "./NoteTextBold";
import NoteTextBroken from "./NoteTextBroken";
import NoteTextBulk from "./NoteTextBulk";
import NoteTextLinear from "./NoteTextLinear";
import NoteTextOutline from "./NoteTextOutline";
import NoteTextTwotone from "./NoteTextTwotone";

export { NoteTextBold, NoteTextBroken, NoteTextBulk, NoteTextLinear, NoteTextOutline, NoteTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "note-text-bold",
    Component: NoteTextBold,
    componentName: "NoteTextBold",
  },
  {
    variant: "broken",
    slug: "note-text-broken",
    Component: NoteTextBroken,
    componentName: "NoteTextBroken",
  },
  {
    variant: "bulk",
    slug: "note-text-bulk",
    Component: NoteTextBulk,
    componentName: "NoteTextBulk",
  },
  {
    variant: "linear",
    slug: "note-text-linear",
    Component: NoteTextLinear,
    componentName: "NoteTextLinear",
  },
  {
    variant: "outline",
    slug: "note-text-outline",
    Component: NoteTextOutline,
    componentName: "NoteTextOutline",
  },
  {
    variant: "twotone",
    slug: "note-text-twotone",
    Component: NoteTextTwotone,
    componentName: "NoteTextTwotone",
  },
];
