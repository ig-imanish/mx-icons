import NotesBold from "./NotesBold";
import NotesBroken from "./NotesBroken";
import NotesBulk from "./NotesBulk";
import NotesLinear from "./NotesLinear";
import NotesOutline from "./NotesOutline";
import NotesTwotone from "./NotesTwotone";

export { NotesBold, NotesBroken, NotesBulk, NotesLinear, NotesOutline, NotesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-bold",
    Component: NotesBold,
    componentName: "NotesBold",
  },,
  {
    variant: "broken",
    slug: "notes-broken",
    Component: NotesBroken,
    componentName: "NotesBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-bulk",
    Component: NotesBulk,
    componentName: "NotesBulk",
  },,
  {
    variant: "linear",
    slug: "notes-linear",
    Component: NotesLinear,
    componentName: "NotesLinear",
  },,
  {
    variant: "outline",
    slug: "notes-outline",
    Component: NotesOutline,
    componentName: "NotesOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-twotone",
    Component: NotesTwotone,
    componentName: "NotesTwotone",
  }
];

export default { NotesBold, NotesBroken, NotesBulk, NotesLinear, NotesOutline, NotesTwotone };
