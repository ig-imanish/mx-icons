import GlobusBold from "./GlobusBold";
import GlobusBroken from "./GlobusBroken";
import GlobusBulk from "./GlobusBulk";
import GlobusLinear from "./GlobusLinear";
import GlobusOutline from "./GlobusOutline";
import GlobusTwotone from "./GlobusTwotone";

export { GlobusBold, GlobusBroken, GlobusBulk, GlobusLinear, GlobusOutline, GlobusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "globus-bold",
    Component: GlobusBold,
    componentName: "GlobusBold",
  },,
  {
    variant: "broken",
    slug: "globus-broken",
    Component: GlobusBroken,
    componentName: "GlobusBroken",
  },,
  {
    variant: "bulk",
    slug: "globus-bulk",
    Component: GlobusBulk,
    componentName: "GlobusBulk",
  },,
  {
    variant: "linear",
    slug: "globus-linear",
    Component: GlobusLinear,
    componentName: "GlobusLinear",
  },,
  {
    variant: "outline",
    slug: "globus-outline",
    Component: GlobusOutline,
    componentName: "GlobusOutline",
  },,
  {
    variant: "twotone",
    slug: "globus-twotone",
    Component: GlobusTwotone,
    componentName: "GlobusTwotone",
  }
];

export default { GlobusBold, GlobusBroken, GlobusBulk, GlobusLinear, GlobusOutline, GlobusTwotone };
