import VolumeLoudBold from "./VolumeLoudBold";
import VolumeLoudBroken from "./VolumeLoudBroken";
import VolumeLoudBulk from "./VolumeLoudBulk";
import VolumeLoudLinear from "./VolumeLoudLinear";
import VolumeLoudOutline from "./VolumeLoudOutline";
import VolumeLoudTwotone from "./VolumeLoudTwotone";

export { VolumeLoudBold, VolumeLoudBroken, VolumeLoudBulk, VolumeLoudLinear, VolumeLoudOutline, VolumeLoudTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-loud-bold",
    Component: VolumeLoudBold,
    componentName: "VolumeLoudBold",
  },,
  {
    variant: "broken",
    slug: "volume-loud-broken",
    Component: VolumeLoudBroken,
    componentName: "VolumeLoudBroken",
  },,
  {
    variant: "bulk",
    slug: "volume-loud-bulk",
    Component: VolumeLoudBulk,
    componentName: "VolumeLoudBulk",
  },,
  {
    variant: "linear",
    slug: "volume-loud-linear",
    Component: VolumeLoudLinear,
    componentName: "VolumeLoudLinear",
  },,
  {
    variant: "outline",
    slug: "volume-loud-outline",
    Component: VolumeLoudOutline,
    componentName: "VolumeLoudOutline",
  },,
  {
    variant: "twotone",
    slug: "volume-loud-twotone",
    Component: VolumeLoudTwotone,
    componentName: "VolumeLoudTwotone",
  }
];

export default { VolumeLoudBold, VolumeLoudBroken, VolumeLoudBulk, VolumeLoudLinear, VolumeLoudOutline, VolumeLoudTwotone };
