import AirplaneBold from "./AirplaneBold";
import AirplaneBroken from "./AirplaneBroken";
import AirplaneBulk from "./AirplaneBulk";
import AirplaneLinear from "./AirplaneLinear";
import AirplaneOutline from "./AirplaneOutline";
import AirplaneTwotone from "./AirplaneTwotone";

export { AirplaneBold, AirplaneBroken, AirplaneBulk, AirplaneLinear, AirplaneOutline, AirplaneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airplane-bold",
    Component: AirplaneBold,
    componentName: "AirplaneBold",
  },
  {
    variant: "broken",
    slug: "airplane-broken",
    Component: AirplaneBroken,
    componentName: "AirplaneBroken",
  },
  {
    variant: "bulk",
    slug: "airplane-bulk",
    Component: AirplaneBulk,
    componentName: "AirplaneBulk",
  },
  {
    variant: "linear",
    slug: "airplane-linear",
    Component: AirplaneLinear,
    componentName: "AirplaneLinear",
  },
  {
    variant: "outline",
    slug: "airplane-outline",
    Component: AirplaneOutline,
    componentName: "AirplaneOutline",
  },
  {
    variant: "twotone",
    slug: "airplane-twotone",
    Component: AirplaneTwotone,
    componentName: "AirplaneTwotone",
  },
];
