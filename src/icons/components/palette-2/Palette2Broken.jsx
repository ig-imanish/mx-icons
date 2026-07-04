import React from "react";
import Icon from "../../Icon";

export default function Palette2Broken({
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
      <path d="M7 3.34132C8.47087 2.48824 10.1786 2 12 2C17.5228 2 22 6.48884 22 12.0261C22 20.178 13.8385 14.4192 12.2619 16.9268C11.8674 17.5541 12.2938 18.3364 12.8168 18.8607C13.4703 19.5159 13.4703 20.5781 12.8168 21.2333C12.2938 21.7576 11.5816 22.0709 10.8468 21.9863C5.86713 21.413 2 17.1723 2 12.0261C2 10.1945 2.48985 8.47765 3.34537 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17.5" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6.5" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11.085 6.99976C11.085 7.82818 10.4134 8.49976 9.58496 8.49976C8.75653 8.49976 8.08496 7.82818 8.08496 6.99976C8.08496 6.17133 8.75653 5.49976 9.58496 5.49976C10.4134 5.49976 11.085 6.17133 11.085 6.99976Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 7C16 7.82843 15.3284 8.5 14.5 8.5C13.6716 8.5 13 7.82843 13 7C13 6.17157 13.6716 5.5 14.5 5.5C15.3284 5.5 16 6.17157 16 7Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
