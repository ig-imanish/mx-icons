import NotebookBold from "./NotebookBold";
import NotebookBroken from "./NotebookBroken";
import NotebookBulk from "./NotebookBulk";
import NotebookLinear from "./NotebookLinear";
import NotebookOutline from "./NotebookOutline";
import NotebookTwotone from "./NotebookTwotone";

export { NotebookBold, NotebookBroken, NotebookBulk, NotebookLinear, NotebookOutline, NotebookTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notebook-bold",
    Component: NotebookBold,
    componentName: "NotebookBold",
  },,
  {
    variant: "broken",
    slug: "notebook-broken",
    Component: NotebookBroken,
    componentName: "NotebookBroken",
  },,
  {
    variant: "bulk",
    slug: "notebook-bulk",
    Component: NotebookBulk,
    componentName: "NotebookBulk",
  },,
  {
    variant: "linear",
    slug: "notebook-linear",
    Component: NotebookLinear,
    componentName: "NotebookLinear",
  },,
  {
    variant: "outline",
    slug: "notebook-outline",
    Component: NotebookOutline,
    componentName: "NotebookOutline",
  },,
  {
    variant: "twotone",
    slug: "notebook-twotone",
    Component: NotebookTwotone,
    componentName: "NotebookTwotone",
  }
];

export default { NotebookBold, NotebookBroken, NotebookBulk, NotebookLinear, NotebookOutline, NotebookTwotone };
