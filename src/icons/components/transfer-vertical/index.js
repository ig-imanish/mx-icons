import TransferVerticalBold from "./TransferVerticalBold";
import TransferVerticalBroken from "./TransferVerticalBroken";
import TransferVerticalBulk from "./TransferVerticalBulk";
import TransferVerticalLinear from "./TransferVerticalLinear";
import TransferVerticalOutline from "./TransferVerticalOutline";
import TransferVerticalTwotone from "./TransferVerticalTwotone";

export { TransferVerticalBold, TransferVerticalBroken, TransferVerticalBulk, TransferVerticalLinear, TransferVerticalOutline, TransferVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "transfer-vertical-bold",
    Component: TransferVerticalBold,
    componentName: "TransferVerticalBold",
  },,
  {
    variant: "broken",
    slug: "transfer-vertical-broken",
    Component: TransferVerticalBroken,
    componentName: "TransferVerticalBroken",
  },,
  {
    variant: "bulk",
    slug: "transfer-vertical-bulk",
    Component: TransferVerticalBulk,
    componentName: "TransferVerticalBulk",
  },,
  {
    variant: "linear",
    slug: "transfer-vertical-linear",
    Component: TransferVerticalLinear,
    componentName: "TransferVerticalLinear",
  },,
  {
    variant: "outline",
    slug: "transfer-vertical-outline",
    Component: TransferVerticalOutline,
    componentName: "TransferVerticalOutline",
  },,
  {
    variant: "twotone",
    slug: "transfer-vertical-twotone",
    Component: TransferVerticalTwotone,
    componentName: "TransferVerticalTwotone",
  }
];

export default { TransferVerticalBold, TransferVerticalBroken, TransferVerticalBulk, TransferVerticalLinear, TransferVerticalOutline, TransferVerticalTwotone };
