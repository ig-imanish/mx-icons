import CloudNotifBold from "./CloudNotifBold";
import CloudNotifBroken from "./CloudNotifBroken";
import CloudNotifBulk from "./CloudNotifBulk";
import CloudNotifLinear from "./CloudNotifLinear";
import CloudNotifOutline from "./CloudNotifOutline";
import CloudNotifTwotone from "./CloudNotifTwotone";

export { CloudNotifBold, CloudNotifBroken, CloudNotifBulk, CloudNotifLinear, CloudNotifOutline, CloudNotifTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-notif-bold",
    Component: CloudNotifBold,
    componentName: "CloudNotifBold",
  },
  {
    variant: "broken",
    slug: "cloud-notif-broken",
    Component: CloudNotifBroken,
    componentName: "CloudNotifBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-notif-bulk",
    Component: CloudNotifBulk,
    componentName: "CloudNotifBulk",
  },
  {
    variant: "linear",
    slug: "cloud-notif-linear",
    Component: CloudNotifLinear,
    componentName: "CloudNotifLinear",
  },
  {
    variant: "outline",
    slug: "cloud-notif-outline",
    Component: CloudNotifOutline,
    componentName: "CloudNotifOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-notif-twotone",
    Component: CloudNotifTwotone,
    componentName: "CloudNotifTwotone",
  },
];
