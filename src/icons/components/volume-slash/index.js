import VolumeSlashBold from "./VolumeSlashBold";
import VolumeSlashBroken from "./VolumeSlashBroken";
import VolumeSlashBulk from "./VolumeSlashBulk";
import VolumeSlashLinear from "./VolumeSlashLinear";
import VolumeSlashOutline from "./VolumeSlashOutline";
import VolumeSlashTwotone from "./VolumeSlashTwotone";

export { VolumeSlashBold, VolumeSlashBroken, VolumeSlashBulk, VolumeSlashLinear, VolumeSlashOutline, VolumeSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-slash-bold",
    Component: VolumeSlashBold,
    componentName: "VolumeSlashBold",
  },
  {
    variant: "broken",
    slug: "volume-slash-broken",
    Component: VolumeSlashBroken,
    componentName: "VolumeSlashBroken",
  },
  {
    variant: "bulk",
    slug: "volume-slash-bulk",
    Component: VolumeSlashBulk,
    componentName: "VolumeSlashBulk",
  },
  {
    variant: "linear",
    slug: "volume-slash-linear",
    Component: VolumeSlashLinear,
    componentName: "VolumeSlashLinear",
  },
  {
    variant: "outline",
    slug: "volume-slash-outline",
    Component: VolumeSlashOutline,
    componentName: "VolumeSlashOutline",
  },
  {
    variant: "twotone",
    slug: "volume-slash-twotone",
    Component: VolumeSlashTwotone,
    componentName: "VolumeSlashTwotone",
  },
];
