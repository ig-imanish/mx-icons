import React from "react";
import Icon from "../../Icon";

export default function PlaylistMinimalisticLinear({
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
      <path d="M20 6L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 16H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 11H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.125 10.6852C20.767 11.6332 21.588 12.1072 21.8478 12.7344C22.0507 13.2245 22.0507 13.7751 21.8478 14.2651C21.588 14.8924 20.767 15.3664 19.125 16.3144C17.483 17.2623 16.662 17.7363 15.9889 17.6477C15.4631 17.5785 14.9862 17.3032 14.6633 16.8824C14.25 16.3437 14.25 15.3958 14.25 13.4998C14.25 11.6038 14.25 10.6558 14.6633 10.1172C14.9862 9.69637 15.4631 9.42106 15.9889 9.35182C16.662 9.26321 17.483 9.7372 19.125 10.6852Z" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
