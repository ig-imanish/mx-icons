import React from "react";
import Icon from "../../Icon";

export default function UsersGroupRoundedBold({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="currentColor"
      className={className}
      {...props}
    >
      <circle cx="9.00098" cy="6" r="4" fill="currentColor"/>
      <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="currentColor"/>
      <path d="M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z" fill="currentColor"/>
      <path d="M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z" fill="currentColor"/>
    </Icon>
  );
}
