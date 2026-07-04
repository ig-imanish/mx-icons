import NotesMinimalisticBold from "./NotesMinimalisticBold";
import NotesMinimalisticBroken from "./NotesMinimalisticBroken";
import NotesMinimalisticBulk from "./NotesMinimalisticBulk";
import NotesMinimalisticLinear from "./NotesMinimalisticLinear";
import NotesMinimalisticOutline from "./NotesMinimalisticOutline";
import NotesMinimalisticTwotone from "./NotesMinimalisticTwotone";

export { NotesMinimalisticBold, NotesMinimalisticBroken, NotesMinimalisticBulk, NotesMinimalisticLinear, NotesMinimalisticOutline, NotesMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notes-minimalistic-bold",
    Component: NotesMinimalisticBold,
    componentName: "NotesMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "notes-minimalistic-broken",
    Component: NotesMinimalisticBroken,
    componentName: "NotesMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "notes-minimalistic-bulk",
    Component: NotesMinimalisticBulk,
    componentName: "NotesMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "notes-minimalistic-linear",
    Component: NotesMinimalisticLinear,
    componentName: "NotesMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "notes-minimalistic-outline",
    Component: NotesMinimalisticOutline,
    componentName: "NotesMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "notes-minimalistic-twotone",
    Component: NotesMinimalisticTwotone,
    componentName: "NotesMinimalisticTwotone",
  }
];

export default { NotesMinimalisticBold, NotesMinimalisticBroken, NotesMinimalisticBulk, NotesMinimalisticLinear, NotesMinimalisticOutline, NotesMinimalisticTwotone };
