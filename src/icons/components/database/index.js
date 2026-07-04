import DatabaseBold from "./DatabaseBold";
import DatabaseBroken from "./DatabaseBroken";
import DatabaseBulk from "./DatabaseBulk";
import DatabaseLinear from "./DatabaseLinear";
import DatabaseOutline from "./DatabaseOutline";
import DatabaseTwotone from "./DatabaseTwotone";

export { DatabaseBold, DatabaseBroken, DatabaseBulk, DatabaseLinear, DatabaseOutline, DatabaseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "database-bold",
    Component: DatabaseBold,
    componentName: "DatabaseBold",
  },,
  {
    variant: "broken",
    slug: "database-broken",
    Component: DatabaseBroken,
    componentName: "DatabaseBroken",
  },,
  {
    variant: "bulk",
    slug: "database-bulk",
    Component: DatabaseBulk,
    componentName: "DatabaseBulk",
  },,
  {
    variant: "linear",
    slug: "database-linear",
    Component: DatabaseLinear,
    componentName: "DatabaseLinear",
  },,
  {
    variant: "outline",
    slug: "database-outline",
    Component: DatabaseOutline,
    componentName: "DatabaseOutline",
  },,
  {
    variant: "twotone",
    slug: "database-twotone",
    Component: DatabaseTwotone,
    componentName: "DatabaseTwotone",
  }
];

export default { DatabaseBold, DatabaseBroken, DatabaseBulk, DatabaseLinear, DatabaseOutline, DatabaseTwotone };
