import React from "react";
import Icon from "../../Icon";

export default function Palette2Linear({
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
      <path d="M2 12.0261C2 17.1723 5.86713 21.413 10.8468 21.9863C11.5816 22.0709 12.2938 21.7576 12.8168 21.2333C13.4703 20.5781 13.4703 19.5159 12.8168 18.8607C12.2938 18.3364 11.8674 17.5541 12.2619 16.9268C13.8385 14.4192 22 20.178 22 12.0261C22 6.48884 17.5228 2 12 2C6.47715 2 2 6.48884 2 12.0261Z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="11.5" r="0.75" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6.5" cy="11.5" r="0.75" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.335 6.99976C10.335 7.41397 9.99917 7.74976 9.58496 7.74976C9.17075 7.74976 8.83496 7.41397 8.83496 6.99976C8.83496 6.58554 9.17075 6.24976 9.58496 6.24976C9.99917 6.24976 10.335 6.58554 10.335 6.99976Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M15.25 7C15.25 7.41421 14.9142 7.75 14.5 7.75C14.0858 7.75 13.75 7.41421 13.75 7C13.75 6.58579 14.0858 6.25 14.5 6.25C14.9142 6.25 15.25 6.58579 15.25 7Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
