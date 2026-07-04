import SnowflakeBold from "./SnowflakeBold";
import SnowflakeBroken from "./SnowflakeBroken";
import SnowflakeBulk from "./SnowflakeBulk";
import SnowflakeLinear from "./SnowflakeLinear";
import SnowflakeOutline from "./SnowflakeOutline";
import SnowflakeTwotone from "./SnowflakeTwotone";

export { SnowflakeBold, SnowflakeBroken, SnowflakeBulk, SnowflakeLinear, SnowflakeOutline, SnowflakeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "snowflake-bold",
    Component: SnowflakeBold,
    componentName: "SnowflakeBold",
  },,
  {
    variant: "broken",
    slug: "snowflake-broken",
    Component: SnowflakeBroken,
    componentName: "SnowflakeBroken",
  },,
  {
    variant: "bulk",
    slug: "snowflake-bulk",
    Component: SnowflakeBulk,
    componentName: "SnowflakeBulk",
  },,
  {
    variant: "linear",
    slug: "snowflake-linear",
    Component: SnowflakeLinear,
    componentName: "SnowflakeLinear",
  },,
  {
    variant: "outline",
    slug: "snowflake-outline",
    Component: SnowflakeOutline,
    componentName: "SnowflakeOutline",
  },,
  {
    variant: "twotone",
    slug: "snowflake-twotone",
    Component: SnowflakeTwotone,
    componentName: "SnowflakeTwotone",
  }
];

export default { SnowflakeBold, SnowflakeBroken, SnowflakeBulk, SnowflakeLinear, SnowflakeOutline, SnowflakeTwotone };
