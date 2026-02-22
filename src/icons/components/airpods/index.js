import AirpodsBold from "./AirpodsBold";
import AirpodsBroken from "./AirpodsBroken";
import AirpodsBulk from "./AirpodsBulk";
import AirpodsLinear from "./AirpodsLinear";
import AirpodsOutline from "./AirpodsOutline";
import AirpodsTwotone from "./AirpodsTwotone";

export { AirpodsBold, AirpodsBroken, AirpodsBulk, AirpodsLinear, AirpodsOutline, AirpodsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airpods-bold",
    Component: AirpodsBold,
    componentName: "AirpodsBold",
  },
  {
    variant: "broken",
    slug: "airpods-broken",
    Component: AirpodsBroken,
    componentName: "AirpodsBroken",
  },
  {
    variant: "bulk",
    slug: "airpods-bulk",
    Component: AirpodsBulk,
    componentName: "AirpodsBulk",
  },
  {
    variant: "linear",
    slug: "airpods-linear",
    Component: AirpodsLinear,
    componentName: "AirpodsLinear",
  },
  {
    variant: "outline",
    slug: "airpods-outline",
    Component: AirpodsOutline,
    componentName: "AirpodsOutline",
  },
  {
    variant: "twotone",
    slug: "airpods-twotone",
    Component: AirpodsTwotone,
    componentName: "AirpodsTwotone",
  },
];
