import SparkleBold from "./SparkleBold";
import SparkleBroken from "./SparkleBroken";
import SparkleLinear from "./SparkleLinear";
import SparkleMini from "./SparkleMini";


export { SparkleBold, SparkleBroken, SparkleLinear,SparkleMini };

export const variants = [
  { variant: "bold", slug: "sparkle-bold", Component: SparkleBold, componentName: "SparkleBold" },
  { variant: "broken", slug: "sparkle-broken", Component: SparkleBroken, componentName: "SparkleBroken" },
  { variant: "linear", slug: "sparkle-linear", Component: SparkleLinear, componentName: "SparkleLinear" },
  { variant: "mini",   slug: "sparkle-mini",   Component:SparkleMini,    componentName:"SparkleMini"}
];

export default { SparkleBold, SparkleBroken, SparkleLinear,SparkleMini };
