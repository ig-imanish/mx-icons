import NoteAddBold from "./NoteAddBold";
import NoteAddBroken from "./NoteAddBroken";
import NoteAddBulk from "./NoteAddBulk";
import NoteAddLinear from "./NoteAddLinear";
import NoteAddOutline from "./NoteAddOutline";
import NoteAddTwotone from "./NoteAddTwotone";

export { NoteAddBold, NoteAddBroken, NoteAddBulk, NoteAddLinear, NoteAddOutline, NoteAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "note-add-bold",
    Component: NoteAddBold,
    componentName: "NoteAddBold",
  },
  {
    variant: "broken",
    slug: "note-add-broken",
    Component: NoteAddBroken,
    componentName: "NoteAddBroken",
  },
  {
    variant: "bulk",
    slug: "note-add-bulk",
    Component: NoteAddBulk,
    componentName: "NoteAddBulk",
  },
  {
    variant: "linear",
    slug: "note-add-linear",
    Component: NoteAddLinear,
    componentName: "NoteAddLinear",
  },
  {
    variant: "outline",
    slug: "note-add-outline",
    Component: NoteAddOutline,
    componentName: "NoteAddOutline",
  },
  {
    variant: "twotone",
    slug: "note-add-twotone",
    Component: NoteAddTwotone,
    componentName: "NoteAddTwotone",
  },
];
