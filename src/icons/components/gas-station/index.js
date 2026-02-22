import GasStationBold from "./GasStationBold";
import GasStationBroken from "./GasStationBroken";
import GasStationBulk from "./GasStationBulk";
import GasStationLinear from "./GasStationLinear";
import GasStationOutline from "./GasStationOutline";

export { GasStationBold, GasStationBroken, GasStationBulk, GasStationLinear, GasStationOutline };

export const variants = [
  {
    variant: "bold",
    slug: "gas-station-bold",
    Component: GasStationBold,
    componentName: "GasStationBold",
  },
  {
    variant: "broken",
    slug: "gas-station-broken",
    Component: GasStationBroken,
    componentName: "GasStationBroken",
  },
  {
    variant: "bulk",
    slug: "gas-station-bulk",
    Component: GasStationBulk,
    componentName: "GasStationBulk",
  },
  {
    variant: "linear",
    slug: "gas-station-linear",
    Component: GasStationLinear,
    componentName: "GasStationLinear",
  },
  {
    variant: "outline",
    slug: "gas-station-outline",
    Component: GasStationOutline,
    componentName: "GasStationOutline",
  },
];
