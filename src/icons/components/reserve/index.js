import ReserveBold from "./ReserveBold";
import ReserveBroken from "./ReserveBroken";
import ReserveBulk from "./ReserveBulk";
import ReserveLinear from "./ReserveLinear";
import ReserveOutline from "./ReserveOutline";
import ReserveTwotone from "./ReserveTwotone";

export { ReserveBold, ReserveBroken, ReserveBulk, ReserveLinear, ReserveOutline, ReserveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "reserve-bold",
    Component: ReserveBold,
    componentName: "ReserveBold",
  },
  {
    variant: "broken",
    slug: "reserve-broken",
    Component: ReserveBroken,
    componentName: "ReserveBroken",
  },
  {
    variant: "bulk",
    slug: "reserve-bulk",
    Component: ReserveBulk,
    componentName: "ReserveBulk",
  },
  {
    variant: "linear",
    slug: "reserve-linear",
    Component: ReserveLinear,
    componentName: "ReserveLinear",
  },
  {
    variant: "outline",
    slug: "reserve-outline",
    Component: ReserveOutline,
    componentName: "ReserveOutline",
  },
  {
    variant: "twotone",
    slug: "reserve-twotone",
    Component: ReserveTwotone,
    componentName: "ReserveTwotone",
  },
];
