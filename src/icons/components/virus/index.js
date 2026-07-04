import VirusBold from "./VirusBold";
import VirusBroken from "./VirusBroken";
import VirusBulk from "./VirusBulk";
import VirusLinear from "./VirusLinear";
import VirusOutline from "./VirusOutline";
import VirusTwotone from "./VirusTwotone";

export { VirusBold, VirusBroken, VirusBulk, VirusLinear, VirusOutline, VirusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "virus-bold",
    Component: VirusBold,
    componentName: "VirusBold",
  },,
  {
    variant: "broken",
    slug: "virus-broken",
    Component: VirusBroken,
    componentName: "VirusBroken",
  },,
  {
    variant: "bulk",
    slug: "virus-bulk",
    Component: VirusBulk,
    componentName: "VirusBulk",
  },,
  {
    variant: "linear",
    slug: "virus-linear",
    Component: VirusLinear,
    componentName: "VirusLinear",
  },,
  {
    variant: "outline",
    slug: "virus-outline",
    Component: VirusOutline,
    componentName: "VirusOutline",
  },,
  {
    variant: "twotone",
    slug: "virus-twotone",
    Component: VirusTwotone,
    componentName: "VirusTwotone",
  }
];

export default { VirusBold, VirusBroken, VirusBulk, VirusLinear, VirusOutline, VirusTwotone };
