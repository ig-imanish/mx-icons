import HistoryBold from "./HistoryBold";
import HistoryBroken from "./HistoryBroken";
import HistoryBulk from "./HistoryBulk";
import HistoryLinear from "./HistoryLinear";
import HistoryOutline from "./HistoryOutline";
import HistoryTwotone from "./HistoryTwotone";

export { HistoryBold, HistoryBroken, HistoryBulk, HistoryLinear, HistoryOutline, HistoryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "history-bold",
    Component: HistoryBold,
    componentName: "HistoryBold",
  },,
  {
    variant: "broken",
    slug: "history-broken",
    Component: HistoryBroken,
    componentName: "HistoryBroken",
  },,
  {
    variant: "bulk",
    slug: "history-bulk",
    Component: HistoryBulk,
    componentName: "HistoryBulk",
  },,
  {
    variant: "linear",
    slug: "history-linear",
    Component: HistoryLinear,
    componentName: "HistoryLinear",
  },,
  {
    variant: "outline",
    slug: "history-outline",
    Component: HistoryOutline,
    componentName: "HistoryOutline",
  },,
  {
    variant: "twotone",
    slug: "history-twotone",
    Component: HistoryTwotone,
    componentName: "HistoryTwotone",
  }
];

export default { HistoryBold, HistoryBroken, HistoryBulk, HistoryLinear, HistoryOutline, HistoryTwotone };
