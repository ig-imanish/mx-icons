import HeadphoneBold from "./HeadphoneBold";
import HeadphoneBroken from "./HeadphoneBroken";
import HeadphoneBulk from "./HeadphoneBulk";
import HeadphoneLinear from "./HeadphoneLinear";
import HeadphoneOutline from "./HeadphoneOutline";
import HeadphoneTwotone from "./HeadphoneTwotone";

export { HeadphoneBold, HeadphoneBroken, HeadphoneBulk, HeadphoneLinear, HeadphoneOutline, HeadphoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "headphone-bold",
    Component: HeadphoneBold,
    componentName: "HeadphoneBold",
  },
  {
    variant: "broken",
    slug: "headphone-broken",
    Component: HeadphoneBroken,
    componentName: "HeadphoneBroken",
  },
  {
    variant: "bulk",
    slug: "headphone-bulk",
    Component: HeadphoneBulk,
    componentName: "HeadphoneBulk",
  },
  {
    variant: "linear",
    slug: "headphone-linear",
    Component: HeadphoneLinear,
    componentName: "HeadphoneLinear",
  },
  {
    variant: "outline",
    slug: "headphone-outline",
    Component: HeadphoneOutline,
    componentName: "HeadphoneOutline",
  },
  {
    variant: "twotone",
    slug: "headphone-twotone",
    Component: HeadphoneTwotone,
    componentName: "HeadphoneTwotone",
  },
];
