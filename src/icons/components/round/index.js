import Round360 from "./Round360";
import RoundRampLeft from "./RoundRampLeft";
import RoundRampRight from "./RoundRampRight";

export { Round360, RoundRampLeft, RoundRampRight };

export const variants = [
  {
    variant: "linear",
    slug: "round360",
    Component: Round360,
    componentName: "Round360",
  },
  {
    variant: "linear",
    slug: "round-ramp-left",
    Component: RoundRampLeft,
    componentName: "RoundRampLeft",
  },
  {
    variant: "linear",
    slug: "round-ramp-right",
    Component: RoundRampRight,
    componentName: "RoundRampRight",
  },
];
