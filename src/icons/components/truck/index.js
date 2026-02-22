import TruckBold from "./TruckBold";
import TruckBroken from "./TruckBroken";
import TruckOutline from "./TruckOutline";
import TruckTwotone from "./TruckTwotone";

export { TruckBold, TruckBroken, TruckOutline, TruckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "truck-bold",
    Component: TruckBold,
    componentName: "TruckBold",
  },
  {
    variant: "broken",
    slug: "truck-broken",
    Component: TruckBroken,
    componentName: "TruckBroken",
  },
  {
    variant: "outline",
    slug: "truck-outline",
    Component: TruckOutline,
    componentName: "TruckOutline",
  },
  {
    variant: "twotone",
    slug: "truck-twotone",
    Component: TruckTwotone,
    componentName: "TruckTwotone",
  },
];
