import PaperclipBold from "./PaperclipBold";
import PaperclipBroken from "./PaperclipBroken";
import PaperclipBulk from "./PaperclipBulk";
import PaperclipLinear from "./PaperclipLinear";
import PaperclipOutline from "./PaperclipOutline";
import PaperclipTwotone from "./PaperclipTwotone";

export { PaperclipBold, PaperclipBroken, PaperclipBulk, PaperclipLinear, PaperclipOutline, PaperclipTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "paperclip-bold",
    Component: PaperclipBold,
    componentName: "PaperclipBold",
  },
  {
    variant: "broken",
    slug: "paperclip-broken",
    Component: PaperclipBroken,
    componentName: "PaperclipBroken",
  },
  {
    variant: "bulk",
    slug: "paperclip-bulk",
    Component: PaperclipBulk,
    componentName: "PaperclipBulk",
  },
  {
    variant: "linear",
    slug: "paperclip-linear",
    Component: PaperclipLinear,
    componentName: "PaperclipLinear",
  },
  {
    variant: "outline",
    slug: "paperclip-outline",
    Component: PaperclipOutline,
    componentName: "PaperclipOutline",
  },
  {
    variant: "twotone",
    slug: "paperclip-twotone",
    Component: PaperclipTwotone,
    componentName: "PaperclipTwotone",
  },
];
