import React from "react";
import Icon from "../../Icon";

export default function VideoFrameBold({
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
      <path d="M6.24976 2.22164C5.02703 2.4159 4.14826 2.78043 3.46423 3.46447C2.78019 4.1485 2.41566 5.02727 2.2214 6.25H6.24976V2.22164Z" fill="currentColor"/>
      <path d="M2.0685 7.75C2.01015 8.73117 2.00133 9.88382 2 11.25H6.24976V7.75H2.0685Z" fill="currentColor"/>
      <path d="M2 12.75C2.00133 14.1162 2.01015 15.2688 2.0685 16.25H6.24976V12.75H2Z" fill="currentColor"/>
      <path d="M2.2214 17.75C2.41566 18.9727 2.78019 19.8515 3.46423 20.5355C4.14826 21.2196 5.02703 21.5841 6.24976 21.7784V17.75H2.2214Z" fill="currentColor"/>
      <path d="M7.74976 21.9313C8.90556 22 10.2993 22 11.9998 22C13.7002 22 15.094 22 16.2498 21.9313V12.75H7.74976V21.9313Z" fill="currentColor"/>
      <path d="M17.7498 21.7784C18.9725 21.5841 19.8513 21.2196 20.5353 20.5355C21.2193 19.8515 21.5839 18.9727 21.7781 17.75H17.7498V21.7784Z" fill="currentColor"/>
      <path d="M21.931 16.25C21.9894 15.2688 21.9982 14.1162 21.9995 12.75H17.7498V16.25H21.931Z" fill="currentColor"/>
      <path d="M21.9995 11.25C21.9982 9.88382 21.9894 8.73117 21.931 7.75H17.7498V11.25H21.9995Z" fill="currentColor"/>
      <path d="M21.7781 6.25C21.5839 5.02727 21.2193 4.1485 20.5353 3.46447C19.8513 2.78043 18.9725 2.4159 17.7498 2.22164V6.25H21.7781Z" fill="currentColor"/>
      <path d="M16.2498 2.06874C15.094 2 13.7002 2 11.9998 2C10.2993 2 8.90556 2 7.74976 2.06874V11.25H16.2498V2.06874Z" fill="currentColor"/>
    </Icon>
  );
}
