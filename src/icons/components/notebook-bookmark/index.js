import NotebookBookmarkBold from "./NotebookBookmarkBold";
import NotebookBookmarkBroken from "./NotebookBookmarkBroken";
import NotebookBookmarkBulk from "./NotebookBookmarkBulk";
import NotebookBookmarkLinear from "./NotebookBookmarkLinear";
import NotebookBookmarkOutline from "./NotebookBookmarkOutline";
import NotebookBookmarkTwotone from "./NotebookBookmarkTwotone";

export { NotebookBookmarkBold, NotebookBookmarkBroken, NotebookBookmarkBulk, NotebookBookmarkLinear, NotebookBookmarkOutline, NotebookBookmarkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "notebook-bookmark-bold",
    Component: NotebookBookmarkBold,
    componentName: "NotebookBookmarkBold",
  },,
  {
    variant: "broken",
    slug: "notebook-bookmark-broken",
    Component: NotebookBookmarkBroken,
    componentName: "NotebookBookmarkBroken",
  },,
  {
    variant: "bulk",
    slug: "notebook-bookmark-bulk",
    Component: NotebookBookmarkBulk,
    componentName: "NotebookBookmarkBulk",
  },,
  {
    variant: "linear",
    slug: "notebook-bookmark-linear",
    Component: NotebookBookmarkLinear,
    componentName: "NotebookBookmarkLinear",
  },,
  {
    variant: "outline",
    slug: "notebook-bookmark-outline",
    Component: NotebookBookmarkOutline,
    componentName: "NotebookBookmarkOutline",
  },,
  {
    variant: "twotone",
    slug: "notebook-bookmark-twotone",
    Component: NotebookBookmarkTwotone,
    componentName: "NotebookBookmarkTwotone",
  }
];

export default { NotebookBookmarkBold, NotebookBookmarkBroken, NotebookBookmarkBulk, NotebookBookmarkLinear, NotebookBookmarkOutline, NotebookBookmarkTwotone };
