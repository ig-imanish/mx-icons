import NotesClipboardBold from "./NotesClipboardBold";
import NotesClipboardBroken from "./NotesClipboardBroken";
import NotesClipboardBulk from "./NotesClipboardBulk";
import NotesClipboardLinear from "./NotesClipboardLinear";
import NotesClipboardOutline from "./NotesClipboardOutline";
import NotesClipboardTwotone from "./NotesClipboardTwotone";

export { NotesClipboardBold, NotesClipboardBroken, NotesClipboardBulk, NotesClipboardLinear, NotesClipboardOutline, NotesClipboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-clipboard-bold",
    Component: NotesClipboardBold,
    componentName: "NotesClipboardBold",
  },,
  {
    variant: "broken",
    slug: "notes-clipboard-broken",
    Component: NotesClipboardBroken,
    componentName: "NotesClipboardBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-clipboard-bulk",
    Component: NotesClipboardBulk,
    componentName: "NotesClipboardBulk",
  },,
  {
    variant: "linear",
    slug: "notes-clipboard-linear",
    Component: NotesClipboardLinear,
    componentName: "NotesClipboardLinear",
  },,
  {
    variant: "outline",
    slug: "notes-clipboard-outline",
    Component: NotesClipboardOutline,
    componentName: "NotesClipboardOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-clipboard-twotone",
    Component: NotesClipboardTwotone,
    componentName: "NotesClipboardTwotone",
  }
];

export default { NotesClipboardBold, NotesClipboardBroken, NotesClipboardBulk, NotesClipboardLinear, NotesClipboardOutline, NotesClipboardTwotone };
