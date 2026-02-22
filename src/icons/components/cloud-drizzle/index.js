import CloudDrizzleBold from "./CloudDrizzleBold";
import CloudDrizzleBroken from "./CloudDrizzleBroken";
import CloudDrizzleBulk from "./CloudDrizzleBulk";
import CloudDrizzleLinear from "./CloudDrizzleLinear";
import CloudDrizzleOutline from "./CloudDrizzleOutline";
import CloudDrizzleTwotone from "./CloudDrizzleTwotone";

export { CloudDrizzleBold, CloudDrizzleBroken, CloudDrizzleBulk, CloudDrizzleLinear, CloudDrizzleOutline, CloudDrizzleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-drizzle-bold",
    Component: CloudDrizzleBold,
    componentName: "CloudDrizzleBold",
  },
  {
    variant: "broken",
    slug: "cloud-drizzle-broken",
    Component: CloudDrizzleBroken,
    componentName: "CloudDrizzleBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-drizzle-bulk",
    Component: CloudDrizzleBulk,
    componentName: "CloudDrizzleBulk",
  },
  {
    variant: "linear",
    slug: "cloud-drizzle-linear",
    Component: CloudDrizzleLinear,
    componentName: "CloudDrizzleLinear",
  },
  {
    variant: "outline",
    slug: "cloud-drizzle-outline",
    Component: CloudDrizzleOutline,
    componentName: "CloudDrizzleOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-drizzle-twotone",
    Component: CloudDrizzleTwotone,
    componentName: "CloudDrizzleTwotone",
  },
];
