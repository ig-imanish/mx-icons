import AccountAdd from "./AccountAdd";
import AccountAlert from "./AccountAlert";
import AccountAlertLoop from "./AccountAlertLoop";
import AccountDelete from "./AccountDelete";
import AccountRemove from "./AccountRemove";
import AccountSmall from "./AccountSmall";

export { AccountAdd, AccountAlert, AccountAlertLoop, AccountDelete, AccountRemove, AccountSmall };

export const variants = [
  {
    variant: "linear",
    slug: "account-add",
    Component: AccountAdd,
    componentName: "AccountAdd",
  },
  {
    variant: "linear",
    slug: "account-alert",
    Component: AccountAlert,
    componentName: "AccountAlert",
  },
  {
    variant: "linear",
    slug: "account-alert-loop",
    Component: AccountAlertLoop,
    componentName: "AccountAlertLoop",
  },
  {
    variant: "linear",
    slug: "account-delete",
    Component: AccountDelete,
    componentName: "AccountDelete",
  },
  {
    variant: "linear",
    slug: "account-remove",
    Component: AccountRemove,
    componentName: "AccountRemove",
  },
  {
    variant: "linear",
    slug: "account-small",
    Component: AccountSmall,
    componentName: "AccountSmall",
  },
];
