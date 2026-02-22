import HeadphonesBold from "./HeadphonesBold";
import HeadphonesBroken from "./HeadphonesBroken";
import HeadphonesBulk from "./HeadphonesBulk";
import HeadphonesLinear from "./HeadphonesLinear";
import HeadphonesOutline from "./HeadphonesOutline";
import HeadphonesTwotone from "./HeadphonesTwotone";

export { HeadphonesBold, HeadphonesBroken, HeadphonesBulk, HeadphonesLinear, HeadphonesOutline, HeadphonesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "headphones-bold",
    Component: HeadphonesBold,
    componentName: "HeadphonesBold",
  },
  {
    variant: "broken",
    slug: "headphones-broken",
    Component: HeadphonesBroken,
    componentName: "HeadphonesBroken",
  },
  {
    variant: "bulk",
    slug: "headphones-bulk",
    Component: HeadphonesBulk,
    componentName: "HeadphonesBulk",
  },
  {
    variant: "linear",
    slug: "headphones-linear",
    Component: HeadphonesLinear,
    componentName: "HeadphonesLinear",
  },
  {
    variant: "outline",
    slug: "headphones-outline",
    Component: HeadphonesOutline,
    componentName: "HeadphonesOutline",
  },
  {
    variant: "twotone",
    slug: "headphones-twotone",
    Component: HeadphonesTwotone,
    componentName: "HeadphonesTwotone",
  },
];
