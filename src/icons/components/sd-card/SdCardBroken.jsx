import React from "react";
import Icon from "../../Icon";

export default function SdCardBroken({
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
      <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C12.3415 2 12.5122 2 12.6858 2.01515C13.4951 2.08581 14.2874 2.414 14.9097 2.93631C15.0431 3.04835 15.1668 3.17206 15.4142 3.41944L20.5806 8.58578C20.828 8.83317 20.9516 8.95687 21.0637 9.09034C21.586 9.71257 21.9142 10.5049 21.9848 11.3142C22 11.4878 22 11.6585 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2.49073 19.5618 2.16444 18.1934 2.0551 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
