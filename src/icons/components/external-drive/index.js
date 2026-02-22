import ExternalDriveBold from "./ExternalDriveBold";
import ExternalDriveBroken from "./ExternalDriveBroken";
import ExternalDriveBulk from "./ExternalDriveBulk";
import ExternalDriveLinear from "./ExternalDriveLinear";
import ExternalDriveOutline from "./ExternalDriveOutline";
import ExternalDriveTwotone from "./ExternalDriveTwotone";

export { ExternalDriveBold, ExternalDriveBroken, ExternalDriveBulk, ExternalDriveLinear, ExternalDriveOutline, ExternalDriveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "external-drive-bold",
    Component: ExternalDriveBold,
    componentName: "ExternalDriveBold",
  },
  {
    variant: "broken",
    slug: "external-drive-broken",
    Component: ExternalDriveBroken,
    componentName: "ExternalDriveBroken",
  },
  {
    variant: "bulk",
    slug: "external-drive-bulk",
    Component: ExternalDriveBulk,
    componentName: "ExternalDriveBulk",
  },
  {
    variant: "linear",
    slug: "external-drive-linear",
    Component: ExternalDriveLinear,
    componentName: "ExternalDriveLinear",
  },
  {
    variant: "outline",
    slug: "external-drive-outline",
    Component: ExternalDriveOutline,
    componentName: "ExternalDriveOutline",
  },
  {
    variant: "twotone",
    slug: "external-drive-twotone",
    Component: ExternalDriveTwotone,
    componentName: "ExternalDriveTwotone",
  },
];
