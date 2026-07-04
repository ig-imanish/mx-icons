import UndoLeftBold from "./UndoLeftBold";
import UndoLeftBroken from "./UndoLeftBroken";
import UndoLeftBulk from "./UndoLeftBulk";
import UndoLeftLinear from "./UndoLeftLinear";
import UndoLeftOutline from "./UndoLeftOutline";
import UndoLeftTwotone from "./UndoLeftTwotone";

export { UndoLeftBold, UndoLeftBroken, UndoLeftBulk, UndoLeftLinear, UndoLeftOutline, UndoLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "undo-left-bold",
    Component: UndoLeftBold,
    componentName: "UndoLeftBold",
  },,
  {
    variant: "broken",
    slug: "undo-left-broken",
    Component: UndoLeftBroken,
    componentName: "UndoLeftBroken",
  },,
  {
    variant: "bulk",
    slug: "undo-left-bulk",
    Component: UndoLeftBulk,
    componentName: "UndoLeftBulk",
  },,
  {
    variant: "linear",
    slug: "undo-left-linear",
    Component: UndoLeftLinear,
    componentName: "UndoLeftLinear",
  },,
  {
    variant: "outline",
    slug: "undo-left-outline",
    Component: UndoLeftOutline,
    componentName: "UndoLeftOutline",
  },,
  {
    variant: "twotone",
    slug: "undo-left-twotone",
    Component: UndoLeftTwotone,
    componentName: "UndoLeftTwotone",
  }
];

export default { UndoLeftBold, UndoLeftBroken, UndoLeftBulk, UndoLeftLinear, UndoLeftOutline, UndoLeftTwotone };
