import TelegramBold from "./TelegramBold";
import TelegramLinear from "./TelegramLinear";

export { TelegramBold, TelegramLinear };

export const variants = [
  {
    variant: "bold",
    slug: "telegram-bold",
    Component: TelegramBold,
    componentName: "TelegramBold",
  },
  {
    variant: "linear",
    slug: "telegram-linear",
    Component: TelegramLinear,
    componentName: "TelegramLinear",
  },
];
