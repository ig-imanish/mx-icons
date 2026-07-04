import UndoRightBold from "./UndoRightBold";
import UndoRightBroken from "./UndoRightBroken";
import UndoRightBulk from "./UndoRightBulk";
import UndoRightLinear from "./UndoRightLinear";
import UndoRightOutline from "./UndoRightOutline";
import UndoRightTwotone from "./UndoRightTwotone";

export { UndoRightBold, UndoRightBroken, UndoRightBulk, UndoRightLinear, UndoRightOutline, UndoRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "undo-right-bold",
    Component: UndoRightBold,
    componentName: "UndoRightBold",
  },,
  {
    variant: "broken",
    slug: "undo-right-broken",
    Component: UndoRightBroken,
    componentName: "UndoRightBroken",
  },,
  {
    variant: "bulk",
    slug: "undo-right-bulk",
    Component: UndoRightBulk,
    componentName: "UndoRightBulk",
  },,
  {
    variant: "linear",
    slug: "undo-right-linear",
    Component: UndoRightLinear,
    componentName: "UndoRightLinear",
  },,
  {
    variant: "outline",
    slug: "undo-right-outline",
    Component: UndoRightOutline,
    componentName: "UndoRightOutline",
  },,
  {
    variant: "twotone",
    slug: "undo-right-twotone",
    Component: UndoRightTwotone,
    componentName: "UndoRightTwotone",
  }
];

export default { UndoRightBold, UndoRightBroken, UndoRightBulk, UndoRightLinear, UndoRightOutline, UndoRightTwotone };
