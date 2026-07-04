import React from "react";
import Icon from "../../Icon";

export default function WaterdropBroken({
  size = 24,
  color = "#292D32",
  className = "",
  ...props
}) {
  return (
    <Icon
      size={size}
      color={color}
      fill="none"
      className={className}
      {...props}
    >
      <path d="M3.44668 16C3.15698 15.1183 3 14.1743 3 13.1928V12.9281C3 8.31651 5.72854 4.16347 9.90329 2.42077C11.2473 1.85974 12.7527 1.85974 14.0967 2.42077C18.2715 4.16347 21 8.31651 21 12.9281V13.1928C21 18.0569 17.1445 22 12.3885 22H11.6115C9.46786 22 7.50718 21.199 6 19.8736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.61475 10.7237C8.2495 8.71826 9.63062 7.08805 11.3858 6.27637" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
