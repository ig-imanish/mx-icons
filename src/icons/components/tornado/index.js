import TornadoBold from "./TornadoBold";
import TornadoBroken from "./TornadoBroken";
import TornadoBulk from "./TornadoBulk";
import TornadoLinear from "./TornadoLinear";
import TornadoOutline from "./TornadoOutline";
import TornadoTwotone from "./TornadoTwotone";

export { TornadoBold, TornadoBroken, TornadoBulk, TornadoLinear, TornadoOutline, TornadoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tornado-bold",
    Component: TornadoBold,
    componentName: "TornadoBold",
  },,
  {
    variant: "broken",
    slug: "tornado-broken",
    Component: TornadoBroken,
    componentName: "TornadoBroken",
  },,
  {
    variant: "bulk",
    slug: "tornado-bulk",
    Component: TornadoBulk,
    componentName: "TornadoBulk",
  },,
  {
    variant: "linear",
    slug: "tornado-linear",
    Component: TornadoLinear,
    componentName: "TornadoLinear",
  },,
  {
    variant: "outline",
    slug: "tornado-outline",
    Component: TornadoOutline,
    componentName: "TornadoOutline",
  },,
  {
    variant: "twotone",
    slug: "tornado-twotone",
    Component: TornadoTwotone,
    componentName: "TornadoTwotone",
  }
];

export default { TornadoBold, TornadoBroken, TornadoBulk, TornadoLinear, TornadoOutline, TornadoTwotone };
