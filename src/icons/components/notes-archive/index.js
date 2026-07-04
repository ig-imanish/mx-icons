import NotesArchiveBold from "./NotesArchiveBold";
import NotesArchiveBroken from "./NotesArchiveBroken";
import NotesArchiveBulk from "./NotesArchiveBulk";
import NotesArchiveLinear from "./NotesArchiveLinear";
import NotesArchiveOutline from "./NotesArchiveOutline";
import NotesArchiveTwotone from "./NotesArchiveTwotone";

export { NotesArchiveBold, NotesArchiveBroken, NotesArchiveBulk, NotesArchiveLinear, NotesArchiveOutline, NotesArchiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-archive-bold",
    Component: NotesArchiveBold,
    componentName: "NotesArchiveBold",
  },,
  {
    variant: "broken",
    slug: "notes-archive-broken",
    Component: NotesArchiveBroken,
    componentName: "NotesArchiveBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-archive-bulk",
    Component: NotesArchiveBulk,
    componentName: "NotesArchiveBulk",
  },,
  {
    variant: "linear",
    slug: "notes-archive-linear",
    Component: NotesArchiveLinear,
    componentName: "NotesArchiveLinear",
  },,
  {
    variant: "outline",
    slug: "notes-archive-outline",
    Component: NotesArchiveOutline,
    componentName: "NotesArchiveOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-archive-twotone",
    Component: NotesArchiveTwotone,
    componentName: "NotesArchiveTwotone",
  }
];

export default { NotesArchiveBold, NotesArchiveBroken, NotesArchiveBulk, NotesArchiveLinear, NotesArchiveOutline, NotesArchiveTwotone };
