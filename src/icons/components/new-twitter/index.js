import NewTwitterBulk from "./NewTwitterBulk";
import NewTwitterLinear from "./NewTwitterLinear";

export { NewTwitterBulk, NewTwitterLinear };

export const variants = [
  {
    variant: "bulk",
    slug: "new-twitter-bulk",
    Component: NewTwitterBulk,
    componentName: "NewTwitterBulk",
  },
  {
    variant: "linear",
    slug: "new-twitter-linear",
    Component: NewTwitterLinear,
    componentName: "NewTwitterLinear",
  },
];
