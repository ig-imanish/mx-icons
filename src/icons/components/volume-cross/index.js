import VolumeCrossBold from "./VolumeCrossBold";
import VolumeCrossBroken from "./VolumeCrossBroken";
import VolumeCrossBulk from "./VolumeCrossBulk";
import VolumeCrossLinear from "./VolumeCrossLinear";
import VolumeCrossOutline from "./VolumeCrossOutline";
import VolumeCrossTwotone from "./VolumeCrossTwotone";

export { VolumeCrossBold, VolumeCrossBroken, VolumeCrossBulk, VolumeCrossLinear, VolumeCrossOutline, VolumeCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-cross-bold",
    Component: VolumeCrossBold,
    componentName: "VolumeCrossBold",
  },
  {
    variant: "broken",
    slug: "volume-cross-broken",
    Component: VolumeCrossBroken,
    componentName: "VolumeCrossBroken",
  },
  {
    variant: "bulk",
    slug: "volume-cross-bulk",
    Component: VolumeCrossBulk,
    componentName: "VolumeCrossBulk",
  },
  {
    variant: "linear",
    slug: "volume-cross-linear",
    Component: VolumeCrossLinear,
    componentName: "VolumeCrossLinear",
  },
  {
    variant: "outline",
    slug: "volume-cross-outline",
    Component: VolumeCrossOutline,
    componentName: "VolumeCrossOutline",
  },
  {
    variant: "twotone",
    slug: "volume-cross-twotone",
    Component: VolumeCrossTwotone,
    componentName: "VolumeCrossTwotone",
  },
];
