import FlashDriveBold from "./FlashDriveBold";
import FlashDriveBroken from "./FlashDriveBroken";
import FlashDriveBulk from "./FlashDriveBulk";
import FlashDriveLinear from "./FlashDriveLinear";
import FlashDriveOutline from "./FlashDriveOutline";
import FlashDriveTwotone from "./FlashDriveTwotone";

export { FlashDriveBold, FlashDriveBroken, FlashDriveBulk, FlashDriveLinear, FlashDriveOutline, FlashDriveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flash-drive-bold",
    Component: FlashDriveBold,
    componentName: "FlashDriveBold",
  },,
  {
    variant: "broken",
    slug: "flash-drive-broken",
    Component: FlashDriveBroken,
    componentName: "FlashDriveBroken",
  },,
  {
    variant: "bulk",
    slug: "flash-drive-bulk",
    Component: FlashDriveBulk,
    componentName: "FlashDriveBulk",
  },,
  {
    variant: "linear",
    slug: "flash-drive-linear",
    Component: FlashDriveLinear,
    componentName: "FlashDriveLinear",
  },,
  {
    variant: "outline",
    slug: "flash-drive-outline",
    Component: FlashDriveOutline,
    componentName: "FlashDriveOutline",
  },,
  {
    variant: "twotone",
    slug: "flash-drive-twotone",
    Component: FlashDriveTwotone,
    componentName: "FlashDriveTwotone",
  }
];

export default { FlashDriveBold, FlashDriveBroken, FlashDriveBulk, FlashDriveLinear, FlashDriveOutline, FlashDriveTwotone };
