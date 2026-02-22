import DirectboxNotifBold from "./DirectboxNotifBold";
import DirectboxNotifBroken from "./DirectboxNotifBroken";
import DirectboxNotifBulk from "./DirectboxNotifBulk";
import DirectboxNotifLinear from "./DirectboxNotifLinear";
import DirectboxNotifOutline from "./DirectboxNotifOutline";
import DirectboxNotifTwotone from "./DirectboxNotifTwotone";

export { DirectboxNotifBold, DirectboxNotifBroken, DirectboxNotifBulk, DirectboxNotifLinear, DirectboxNotifOutline, DirectboxNotifTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "directbox-notif-bold",
    Component: DirectboxNotifBold,
    componentName: "DirectboxNotifBold",
  },
  {
    variant: "broken",
    slug: "directbox-notif-broken",
    Component: DirectboxNotifBroken,
    componentName: "DirectboxNotifBroken",
  },
  {
    variant: "bulk",
    slug: "directbox-notif-bulk",
    Component: DirectboxNotifBulk,
    componentName: "DirectboxNotifBulk",
  },
  {
    variant: "linear",
    slug: "directbox-notif-linear",
    Component: DirectboxNotifLinear,
    componentName: "DirectboxNotifLinear",
  },
  {
    variant: "outline",
    slug: "directbox-notif-outline",
    Component: DirectboxNotifOutline,
    componentName: "DirectboxNotifOutline",
  },
  {
    variant: "twotone",
    slug: "directbox-notif-twotone",
    Component: DirectboxNotifTwotone,
    componentName: "DirectboxNotifTwotone",
  },
];
