import NoteSquareBold from "./NoteSquareBold";
import NoteSquareBroken from "./NoteSquareBroken";
import NoteSquareBulk from "./NoteSquareBulk";
import NoteSquareLinear from "./NoteSquareLinear";
import NoteSquareOutline from "./NoteSquareOutline";
import NoteSquareTwotone from "./NoteSquareTwotone";

export { NoteSquareBold, NoteSquareBroken, NoteSquareBulk, NoteSquareLinear, NoteSquareOutline, NoteSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "note-square-bold",
    Component: NoteSquareBold,
    componentName: "NoteSquareBold",
  },
  {
    variant: "broken",
    slug: "note-square-broken",
    Component: NoteSquareBroken,
    componentName: "NoteSquareBroken",
  },
  {
    variant: "bulk",
    slug: "note-square-bulk",
    Component: NoteSquareBulk,
    componentName: "NoteSquareBulk",
  },
  {
    variant: "linear",
    slug: "note-square-linear",
    Component: NoteSquareLinear,
    componentName: "NoteSquareLinear",
  },
  {
    variant: "outline",
    slug: "note-square-outline",
    Component: NoteSquareOutline,
    componentName: "NoteSquareOutline",
  },
  {
    variant: "twotone",
    slug: "note-square-twotone",
    Component: NoteSquareTwotone,
    componentName: "NoteSquareTwotone",
  },
];
