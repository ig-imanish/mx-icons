import RecordMinimalisticBold from "./RecordMinimalisticBold";
import RecordMinimalisticBroken from "./RecordMinimalisticBroken";
import RecordMinimalisticBulk from "./RecordMinimalisticBulk";
import RecordMinimalisticLinear from "./RecordMinimalisticLinear";
import RecordMinimalisticOutline from "./RecordMinimalisticOutline";
import RecordMinimalisticTwotone from "./RecordMinimalisticTwotone";

export { RecordMinimalisticBold, RecordMinimalisticBroken, RecordMinimalisticBulk, RecordMinimalisticLinear, RecordMinimalisticOutline, RecordMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "record-minimalistic-bold",
    Component: RecordMinimalisticBold,
    componentName: "RecordMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "record-minimalistic-broken",
    Component: RecordMinimalisticBroken,
    componentName: "RecordMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "record-minimalistic-bulk",
    Component: RecordMinimalisticBulk,
    componentName: "RecordMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "record-minimalistic-linear",
    Component: RecordMinimalisticLinear,
    componentName: "RecordMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "record-minimalistic-outline",
    Component: RecordMinimalisticOutline,
    componentName: "RecordMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "record-minimalistic-twotone",
    Component: RecordMinimalisticTwotone,
    componentName: "RecordMinimalisticTwotone",
  }
];

export default { RecordMinimalisticBold, RecordMinimalisticBroken, RecordMinimalisticBulk, RecordMinimalisticLinear, RecordMinimalisticOutline, RecordMinimalisticTwotone };
