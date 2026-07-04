import WaterdropsBold from "./WaterdropsBold";
import WaterdropsBroken from "./WaterdropsBroken";
import WaterdropsBulk from "./WaterdropsBulk";
import WaterdropsLinear from "./WaterdropsLinear";
import WaterdropsOutline from "./WaterdropsOutline";
import WaterdropsTwotone from "./WaterdropsTwotone";

export { WaterdropsBold, WaterdropsBroken, WaterdropsBulk, WaterdropsLinear, WaterdropsOutline, WaterdropsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "waterdrops-bold",
    Component: WaterdropsBold,
    componentName: "WaterdropsBold",
  },,
  {
    variant: "broken",
    slug: "waterdrops-broken",
    Component: WaterdropsBroken,
    componentName: "WaterdropsBroken",
  },,
  {
    variant: "bulk",
    slug: "waterdrops-bulk",
    Component: WaterdropsBulk,
    componentName: "WaterdropsBulk",
  },,
  {
    variant: "linear",
    slug: "waterdrops-linear",
    Component: WaterdropsLinear,
    componentName: "WaterdropsLinear",
  },,
  {
    variant: "outline",
    slug: "waterdrops-outline",
    Component: WaterdropsOutline,
    componentName: "WaterdropsOutline",
  },,
  {
    variant: "twotone",
    slug: "waterdrops-twotone",
    Component: WaterdropsTwotone,
    componentName: "WaterdropsTwotone",
  }
];

export default { WaterdropsBold, WaterdropsBroken, WaterdropsBulk, WaterdropsLinear, WaterdropsOutline, WaterdropsTwotone };
