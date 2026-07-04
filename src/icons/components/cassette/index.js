import CassetteBold from "./CassetteBold";
import CassetteBroken from "./CassetteBroken";
import CassetteBulk from "./CassetteBulk";
import CassetteLinear from "./CassetteLinear";
import CassetteOutline from "./CassetteOutline";
import CassetteTwotone from "./CassetteTwotone";

export { CassetteBold, CassetteBroken, CassetteBulk, CassetteLinear, CassetteOutline, CassetteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cassette-bold",
    Component: CassetteBold,
    componentName: "CassetteBold",
  },,
  {
    variant: "broken",
    slug: "cassette-broken",
    Component: CassetteBroken,
    componentName: "CassetteBroken",
  },,
  {
    variant: "bulk",
    slug: "cassette-bulk",
    Component: CassetteBulk,
    componentName: "CassetteBulk",
  },,
  {
    variant: "linear",
    slug: "cassette-linear",
    Component: CassetteLinear,
    componentName: "CassetteLinear",
  },,
  {
    variant: "outline",
    slug: "cassette-outline",
    Component: CassetteOutline,
    componentName: "CassetteOutline",
  },,
  {
    variant: "twotone",
    slug: "cassette-twotone",
    Component: CassetteTwotone,
    componentName: "CassetteTwotone",
  }
];

export default { CassetteBold, CassetteBroken, CassetteBulk, CassetteLinear, CassetteOutline, CassetteTwotone };
