import AirpodBold from "./AirpodBold";
import AirpodBroken from "./AirpodBroken";
import AirpodBulk from "./AirpodBulk";
import AirpodLinear from "./AirpodLinear";
import AirpodOutline from "./AirpodOutline";
import AirpodTwotone from "./AirpodTwotone";

export { AirpodBold, AirpodBroken, AirpodBulk, AirpodLinear, AirpodOutline, AirpodTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airpod-bold",
    Component: AirpodBold,
    componentName: "AirpodBold",
  },
  {
    variant: "broken",
    slug: "airpod-broken",
    Component: AirpodBroken,
    componentName: "AirpodBroken",
  },
  {
    variant: "bulk",
    slug: "airpod-bulk",
    Component: AirpodBulk,
    componentName: "AirpodBulk",
  },
  {
    variant: "linear",
    slug: "airpod-linear",
    Component: AirpodLinear,
    componentName: "AirpodLinear",
  },
  {
    variant: "outline",
    slug: "airpod-outline",
    Component: AirpodOutline,
    componentName: "AirpodOutline",
  },
  {
    variant: "twotone",
    slug: "airpod-twotone",
    Component: AirpodTwotone,
    componentName: "AirpodTwotone",
  },
];
