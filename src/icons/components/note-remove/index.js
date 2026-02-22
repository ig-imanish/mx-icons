import NoteRemoveBold from "./NoteRemoveBold";
import NoteRemoveBroken from "./NoteRemoveBroken";
import NoteRemoveBulk from "./NoteRemoveBulk";
import NoteRemoveLinear from "./NoteRemoveLinear";
import NoteRemoveOutline from "./NoteRemoveOutline";
import NoteRemoveTwotone from "./NoteRemoveTwotone";

export { NoteRemoveBold, NoteRemoveBroken, NoteRemoveBulk, NoteRemoveLinear, NoteRemoveOutline, NoteRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "note-remove-bold",
    Component: NoteRemoveBold,
    componentName: "NoteRemoveBold",
  },
  {
    variant: "broken",
    slug: "note-remove-broken",
    Component: NoteRemoveBroken,
    componentName: "NoteRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "note-remove-bulk",
    Component: NoteRemoveBulk,
    componentName: "NoteRemoveBulk",
  },
  {
    variant: "linear",
    slug: "note-remove-linear",
    Component: NoteRemoveLinear,
    componentName: "NoteRemoveLinear",
  },
  {
    variant: "outline",
    slug: "note-remove-outline",
    Component: NoteRemoveOutline,
    componentName: "NoteRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "note-remove-twotone",
    Component: NoteRemoveTwotone,
    componentName: "NoteRemoveTwotone",
  },
];
