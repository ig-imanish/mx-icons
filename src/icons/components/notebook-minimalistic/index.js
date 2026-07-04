import NotebookMinimalisticBold from "./NotebookMinimalisticBold";
import NotebookMinimalisticBroken from "./NotebookMinimalisticBroken";
import NotebookMinimalisticBulk from "./NotebookMinimalisticBulk";
import NotebookMinimalisticLinear from "./NotebookMinimalisticLinear";
import NotebookMinimalisticOutline from "./NotebookMinimalisticOutline";
import NotebookMinimalisticTwotone from "./NotebookMinimalisticTwotone";

export { NotebookMinimalisticBold, NotebookMinimalisticBroken, NotebookMinimalisticBulk, NotebookMinimalisticLinear, NotebookMinimalisticOutline, NotebookMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notebook-minimalistic-bold",
    Component: NotebookMinimalisticBold,
    componentName: "NotebookMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "notebook-minimalistic-broken",
    Component: NotebookMinimalisticBroken,
    componentName: "NotebookMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "notebook-minimalistic-bulk",
    Component: NotebookMinimalisticBulk,
    componentName: "NotebookMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "notebook-minimalistic-linear",
    Component: NotebookMinimalisticLinear,
    componentName: "NotebookMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "notebook-minimalistic-outline",
    Component: NotebookMinimalisticOutline,
    componentName: "NotebookMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "notebook-minimalistic-twotone",
    Component: NotebookMinimalisticTwotone,
    componentName: "NotebookMinimalisticTwotone",
  }
];

export default { NotebookMinimalisticBold, NotebookMinimalisticBroken, NotebookMinimalisticBulk, NotebookMinimalisticLinear, NotebookMinimalisticOutline, NotebookMinimalisticTwotone };
