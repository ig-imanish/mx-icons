import GoogleDriveBold from "./GoogleDriveBold";
import GoogleDriveLinear from "./GoogleDriveLinear";
import GoogleDriveBulk from "./GoogleDriveBulk";
import GoogleDriveOutline from "./GoogleDriveOutline";

export { GoogleDriveBold, GoogleDriveLinear, GoogleDriveBulk, GoogleDriveOutline };

export const variants = [
  {
    variant: "bold",
    slug: "google-drive-bold",
    Component: GoogleDriveBold,
    componentName: "GoogleDriveBold",
  },
  {
    variant: "linear",
    slug: "google-drive-linear",
    Component: GoogleDriveLinear,
    componentName: "GoogleDriveLinear",
  },
  {
    variant: "bulk",
    slug: "google-drive-bulk",
    Component: GoogleDriveBulk,
    componentName: "GoogleDriveBulk",
  },
  {
    variant: "outline",
    slug: "google-drive-outline",
    Component: GoogleDriveOutline,
    componentName: "GoogleDriveOutline",
  },
];

export default {
  GoogleDriveBold,
  GoogleDriveLinear,
  GoogleDriveBulk,
  GoogleDriveOutline,
};
