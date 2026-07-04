import React from "react";
import Icon from "../../Icon";

export default function PlaylistTwotone({
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
      <path opacity="0.5" d="M21 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M21 10L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11 14L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path opacity="0.5" d="M11 18H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18.875 14.1183C20.5288 15.0732 21.3558 15.5506 21.4772 16.2394C21.5076 16.4118 21.5076 16.5881 21.4772 16.7604C21.3558 17.4492 20.5288 17.9266 18.875 18.8815C17.2212 19.8363 16.3942 20.3137 15.737 20.0745C15.5725 20.0147 15.4199 19.9265 15.2858 19.814C14.75 19.3644 14.75 18.4096 14.75 16.4999C14.75 14.5902 14.75 13.6354 15.2858 13.1858C15.4199 13.0733 15.5725 12.9852 15.737 12.9253C16.3942 12.6861 17.2212 13.1635 18.875 14.1183Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
