import GoogleDriveBold from "./GoogleDriveBold";
import GoogleDriveBulk from "./GoogleDriveBulk";
import GoogleDriveLinear from "./GoogleDriveLinear";
import GoogleDriveOutline from "./GoogleDriveOutline";

export { GoogleDriveBold, GoogleDriveBulk, GoogleDriveLinear, GoogleDriveOutline };

export const variants = [
  {
    variant: "bold",
    slug: "google-drive-bold",
    Component: GoogleDriveBold,
    componentName: "GoogleDriveBold",
  },
  {
    variant: "bulk",
    slug: "google-drive-bulk",
    Component: GoogleDriveBulk,
    componentName: "GoogleDriveBulk",
  },
  {
    variant: "linear",
    slug: "google-drive-linear",
    Component: GoogleDriveLinear,
    componentName: "GoogleDriveLinear",
  },
  {
    variant: "outline",
    slug: "google-drive-outline",
    Component: GoogleDriveOutline,
    componentName: "GoogleDriveOutline",
  },
];
