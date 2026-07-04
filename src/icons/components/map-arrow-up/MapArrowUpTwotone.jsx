import React from "react";
import Icon from "../../Icon";

export default function MapArrowUpTwotone({
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
      <path d="M12 18.4731C11.7501 18.4731 11.5002 18.5344 11.2706 18.657L5.36689 21.809C3.97914 22.5499 2.49789 20.9984 3.16496 19.5025L10.5275 2.99281C10.8226 2.33094 11.4113 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M12 18.4731C12.2499 18.4731 12.4998 18.5344 12.7294 18.657L18.6331 21.809C20.0209 22.5499 21.5021 20.9984 20.835 19.5025L13.4725 2.99281C13.1774 2.33094 12.5887 2 12 2" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
