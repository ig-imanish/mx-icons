import NotesClipboardTextBold from "./NotesClipboardTextBold";
import NotesClipboardTextBroken from "./NotesClipboardTextBroken";
import NotesClipboardTextBulk from "./NotesClipboardTextBulk";
import NotesClipboardTextLinear from "./NotesClipboardTextLinear";
import NotesClipboardTextOutline from "./NotesClipboardTextOutline";
import NotesClipboardTextTwotone from "./NotesClipboardTextTwotone";

export { NotesClipboardTextBold, NotesClipboardTextBroken, NotesClipboardTextBulk, NotesClipboardTextLinear, NotesClipboardTextOutline, NotesClipboardTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-clipboard-text-bold",
    Component: NotesClipboardTextBold,
    componentName: "NotesClipboardTextBold",
  },,
  {
    variant: "broken",
    slug: "notes-clipboard-text-broken",
    Component: NotesClipboardTextBroken,
    componentName: "NotesClipboardTextBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-clipboard-text-bulk",
    Component: NotesClipboardTextBulk,
    componentName: "NotesClipboardTextBulk",
  },,
  {
    variant: "linear",
    slug: "notes-clipboard-text-linear",
    Component: NotesClipboardTextLinear,
    componentName: "NotesClipboardTextLinear",
  },,
  {
    variant: "outline",
    slug: "notes-clipboard-text-outline",
    Component: NotesClipboardTextOutline,
    componentName: "NotesClipboardTextOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-clipboard-text-twotone",
    Component: NotesClipboardTextTwotone,
    componentName: "NotesClipboardTextTwotone",
  }
];

export default { NotesClipboardTextBold, NotesClipboardTextBroken, NotesClipboardTextBulk, NotesClipboardTextLinear, NotesClipboardTextOutline, NotesClipboardTextTwotone };
