import React from "react";
import Icon from "../../Icon";

export default function WineglassTriangleBulk({
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
      <path opacity="0.5" d="M19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L11.2851 13.8404C11.6773 14.2415 12.3227 14.2415 12.7149 13.8404L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.00586 21C7.00586 20.5858 7.34165 20.25 7.75586 20.25H16.2437C16.6579 20.25 16.9937 20.5858 16.9937 21C16.9937 21.4142 16.6579 21.75 16.2437 21.75H7.75586C7.34165 21.75 7.00586 21.4142 7.00586 21Z" fill="currentColor"/>
      <path d="M11.2853 13.8404C11.6776 14.2415 12.3229 14.2415 12.7152 13.8404L16.4712 10H7.5293L11.2853 13.8404Z" fill="currentColor"/>
      <path opacity="0.5" d="M11.2853 13.8405C11.6776 14.2416 12.3229 14.2416 12.7152 13.8405L12.75 13.8049V20.25H11.25V13.8044L11.2853 13.8405Z" fill="currentColor"/>
    </Icon>
  );
}
