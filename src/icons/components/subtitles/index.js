import SubtitlesBold from "./SubtitlesBold";
import SubtitlesBroken from "./SubtitlesBroken";
import SubtitlesBulk from "./SubtitlesBulk";
import SubtitlesLinear from "./SubtitlesLinear";
import SubtitlesOutline from "./SubtitlesOutline";
import SubtitlesTwotone from "./SubtitlesTwotone";

export { SubtitlesBold, SubtitlesBroken, SubtitlesBulk, SubtitlesLinear, SubtitlesOutline, SubtitlesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "subtitles-bold",
    Component: SubtitlesBold,
    componentName: "SubtitlesBold",
  },,
  {
    variant: "broken",
    slug: "subtitles-broken",
    Component: SubtitlesBroken,
    componentName: "SubtitlesBroken",
  },,
  {
    variant: "bulk",
    slug: "subtitles-bulk",
    Component: SubtitlesBulk,
    componentName: "SubtitlesBulk",
  },,
  {
    variant: "linear",
    slug: "subtitles-linear",
    Component: SubtitlesLinear,
    componentName: "SubtitlesLinear",
  },,
  {
    variant: "outline",
    slug: "subtitles-outline",
    Component: SubtitlesOutline,
    componentName: "SubtitlesOutline",
  },,
  {
    variant: "twotone",
    slug: "subtitles-twotone",
    Component: SubtitlesTwotone,
    componentName: "SubtitlesTwotone",
  }
];

export default { SubtitlesBold, SubtitlesBroken, SubtitlesBulk, SubtitlesLinear, SubtitlesOutline, SubtitlesTwotone };
