import NoteBold from "./NoteBold";
import NoteBroken from "./NoteBroken";
import NoteBulk from "./NoteBulk";
import NoteLinear from "./NoteLinear";
import NoteOutline from "./NoteOutline";
import NoteTwotone from "./NoteTwotone";

export { NoteBold, NoteBroken, NoteBulk, NoteLinear, NoteOutline, NoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "note-bold",
    Component: NoteBold,
    componentName: "NoteBold",
  },
  {
    variant: "broken",
    slug: "note-broken",
    Component: NoteBroken,
    componentName: "NoteBroken",
  },
  {
    variant: "bulk",
    slug: "note-bulk",
    Component: NoteBulk,
    componentName: "NoteBulk",
  },
  {
    variant: "linear",
    slug: "note-linear",
    Component: NoteLinear,
    componentName: "NoteLinear",
  },
  {
    variant: "outline",
    slug: "note-outline",
    Component: NoteOutline,
    componentName: "NoteOutline",
  },
  {
    variant: "twotone",
    slug: "note-twotone",
    Component: NoteTwotone,
    componentName: "NoteTwotone",
  },
];
