import React from "react";
import Icon from "../../Icon";

export default function SkateboardTwotone({
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
      <path opacity="0.5" d="M2 7L2.81253 8.2188C3.5544 9.3316 4.80332 10 6.14073 10H17.8593C19.1967 10 20.4456 9.33159 21.1875 8.2188L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="7" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
