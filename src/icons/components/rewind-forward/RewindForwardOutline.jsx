import React from "react";
import Icon from "../../Icon";

export default function RewindForwardOutline({
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
      <path d="M10.9998 8.76844L4.90312 4.30838C3.60064 3.41122 2 4.57895 2 6.42632L2 17.5737C2 19.4211 3.60065 20.5888 4.90313 19.6916L10.9998 15.2316M10.9998 7.12303L10.9998 16.877C10.9998 18.4934 12.467 19.5152 13.661 18.7302L21.0784 13.8532C22.3069 13.0455 22.3069 10.9545 21.0784 10.1468L13.661 5.26983C12.467 4.48482 10.9998 5.50658 10.9998 7.12303Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
