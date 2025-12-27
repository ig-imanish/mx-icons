import TelegramBold from "./TelegramBold";
import TelegramLinear from "./TelegramLinear";

export { TelegramBold, TelegramLinear };

export const variants = [
  {
    variant: "linear",
    slug: "telegram-linear",
    Component: TelegramLinear,
    componentName: "TelegramLinear",
  },
  {
    variant: "bold",
    slug: "telegram-bold",
    Component: TelegramBold,
    componentName: "TelegramBold",
  }
];

export default { TelegramBold, TelegramLinear };
