import StreamBold from "./StreamBold";
import StreamBroken from "./StreamBroken";
import StreamBulk from "./StreamBulk";
import StreamLinear from "./StreamLinear";
import StreamOutline from "./StreamOutline";
import StreamTwotone from "./StreamTwotone";

export { StreamBold, StreamBroken, StreamBulk, StreamLinear, StreamOutline, StreamTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stream-bold",
    Component: StreamBold,
    componentName: "StreamBold",
  },,
  {
    variant: "broken",
    slug: "stream-broken",
    Component: StreamBroken,
    componentName: "StreamBroken",
  },,
  {
    variant: "bulk",
    slug: "stream-bulk",
    Component: StreamBulk,
    componentName: "StreamBulk",
  },,
  {
    variant: "linear",
    slug: "stream-linear",
    Component: StreamLinear,
    componentName: "StreamLinear",
  },,
  {
    variant: "outline",
    slug: "stream-outline",
    Component: StreamOutline,
    componentName: "StreamOutline",
  },,
  {
    variant: "twotone",
    slug: "stream-twotone",
    Component: StreamTwotone,
    componentName: "StreamTwotone",
  }
];

export default { StreamBold, StreamBroken, StreamBulk, StreamLinear, StreamOutline, StreamTwotone };
