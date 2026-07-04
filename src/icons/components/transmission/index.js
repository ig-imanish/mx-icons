import TransmissionBold from "./TransmissionBold";
import TransmissionBroken from "./TransmissionBroken";
import TransmissionBulk from "./TransmissionBulk";
import TransmissionLinear from "./TransmissionLinear";
import TransmissionOutline from "./TransmissionOutline";
import TransmissionTwotone from "./TransmissionTwotone";

export { TransmissionBold, TransmissionBroken, TransmissionBulk, TransmissionLinear, TransmissionOutline, TransmissionTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "transmission-bold",
    Component: TransmissionBold,
    componentName: "TransmissionBold",
  },,
  {
    variant: "broken",
    slug: "transmission-broken",
    Component: TransmissionBroken,
    componentName: "TransmissionBroken",
  },,
  {
    variant: "bulk",
    slug: "transmission-bulk",
    Component: TransmissionBulk,
    componentName: "TransmissionBulk",
  },,
  {
    variant: "linear",
    slug: "transmission-linear",
    Component: TransmissionLinear,
    componentName: "TransmissionLinear",
  },,
  {
    variant: "outline",
    slug: "transmission-outline",
    Component: TransmissionOutline,
    componentName: "TransmissionOutline",
  },,
  {
    variant: "twotone",
    slug: "transmission-twotone",
    Component: TransmissionTwotone,
    componentName: "TransmissionTwotone",
  }
];

export default { TransmissionBold, TransmissionBroken, TransmissionBulk, TransmissionLinear, TransmissionOutline, TransmissionTwotone };
