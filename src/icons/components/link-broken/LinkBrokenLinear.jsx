import React from "react";
import Icon from "../../Icon";

export default function LinkBrokenLinear({
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
      <path d="M2 8L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 4L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 6.56252L14.7001 2.93755C16.1597 1.50753 18.7629 1.73938 20.5145 3.4554C22.266 5.17142 22.5027 7.72176 21.043 9.15178L18.1358 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 15.5866L10.9653 20.001C9.57254 21.5247 7.0887 21.2777 5.41744 19.4492C3.74618 17.6207 3.52038 14.9032 4.91309 13.3795L6.17395 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
