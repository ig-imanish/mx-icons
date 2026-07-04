import MapPointWaveBold from "./MapPointWaveBold";
import MapPointWaveBroken from "./MapPointWaveBroken";
import MapPointWaveBulk from "./MapPointWaveBulk";
import MapPointWaveLinear from "./MapPointWaveLinear";
import MapPointWaveOutline from "./MapPointWaveOutline";
import MapPointWaveTwotone from "./MapPointWaveTwotone";

export { MapPointWaveBold, MapPointWaveBroken, MapPointWaveBulk, MapPointWaveLinear, MapPointWaveOutline, MapPointWaveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-wave-bold",
    Component: MapPointWaveBold,
    componentName: "MapPointWaveBold",
  },,
  {
    variant: "broken",
    slug: "map-point-wave-broken",
    Component: MapPointWaveBroken,
    componentName: "MapPointWaveBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-wave-bulk",
    Component: MapPointWaveBulk,
    componentName: "MapPointWaveBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-wave-linear",
    Component: MapPointWaveLinear,
    componentName: "MapPointWaveLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-wave-outline",
    Component: MapPointWaveOutline,
    componentName: "MapPointWaveOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-wave-twotone",
    Component: MapPointWaveTwotone,
    componentName: "MapPointWaveTwotone",
  }
];

export default { MapPointWaveBold, MapPointWaveBroken, MapPointWaveBulk, MapPointWaveLinear, MapPointWaveOutline, MapPointWaveTwotone };
