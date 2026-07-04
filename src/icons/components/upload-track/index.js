import UploadTrackBold from "./UploadTrackBold";
import UploadTrackBroken from "./UploadTrackBroken";
import UploadTrackBulk from "./UploadTrackBulk";
import UploadTrackLinear from "./UploadTrackLinear";
import UploadTrackOutline from "./UploadTrackOutline";
import UploadTrackTwotone from "./UploadTrackTwotone";

export { UploadTrackBold, UploadTrackBroken, UploadTrackBulk, UploadTrackLinear, UploadTrackOutline, UploadTrackTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "upload-track-bold",
    Component: UploadTrackBold,
    componentName: "UploadTrackBold",
  },,
  {
    variant: "broken",
    slug: "upload-track-broken",
    Component: UploadTrackBroken,
    componentName: "UploadTrackBroken",
  },,
  {
    variant: "bulk",
    slug: "upload-track-bulk",
    Component: UploadTrackBulk,
    componentName: "UploadTrackBulk",
  },,
  {
    variant: "linear",
    slug: "upload-track-linear",
    Component: UploadTrackLinear,
    componentName: "UploadTrackLinear",
  },,
  {
    variant: "outline",
    slug: "upload-track-outline",
    Component: UploadTrackOutline,
    componentName: "UploadTrackOutline",
  },,
  {
    variant: "twotone",
    slug: "upload-track-twotone",
    Component: UploadTrackTwotone,
    componentName: "UploadTrackTwotone",
  }
];

export default { UploadTrackBold, UploadTrackBroken, UploadTrackBulk, UploadTrackLinear, UploadTrackOutline, UploadTrackTwotone };
