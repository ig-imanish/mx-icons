import VideocameraRecordBold from "./VideocameraRecordBold";
import VideocameraRecordBroken from "./VideocameraRecordBroken";
import VideocameraRecordBulk from "./VideocameraRecordBulk";
import VideocameraRecordLinear from "./VideocameraRecordLinear";
import VideocameraRecordOutline from "./VideocameraRecordOutline";
import VideocameraRecordTwotone from "./VideocameraRecordTwotone";

export { VideocameraRecordBold, VideocameraRecordBroken, VideocameraRecordBulk, VideocameraRecordLinear, VideocameraRecordOutline, VideocameraRecordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "videocamera-record-bold",
    Component: VideocameraRecordBold,
    componentName: "VideocameraRecordBold",
  },,
  {
    variant: "broken",
    slug: "videocamera-record-broken",
    Component: VideocameraRecordBroken,
    componentName: "VideocameraRecordBroken",
  },,
  {
    variant: "bulk",
    slug: "videocamera-record-bulk",
    Component: VideocameraRecordBulk,
    componentName: "VideocameraRecordBulk",
  },,
  {
    variant: "linear",
    slug: "videocamera-record-linear",
    Component: VideocameraRecordLinear,
    componentName: "VideocameraRecordLinear",
  },,
  {
    variant: "outline",
    slug: "videocamera-record-outline",
    Component: VideocameraRecordOutline,
    componentName: "VideocameraRecordOutline",
  },,
  {
    variant: "twotone",
    slug: "videocamera-record-twotone",
    Component: VideocameraRecordTwotone,
    componentName: "VideocameraRecordTwotone",
  }
];

export default { VideocameraRecordBold, VideocameraRecordBroken, VideocameraRecordBulk, VideocameraRecordLinear, VideocameraRecordOutline, VideocameraRecordTwotone };
