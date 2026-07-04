import React from "react";
import Icon from "../../Icon";

export default function HomeLampBroken({
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
      <path d="M9 22H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 22V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2C14.4232 2 15.6348 2 16.5824 2.56616C16.8571 2.73028 17.1111 2.92678 17.339 3.15144C18.1252 3.9264 18.4296 5.0991 19.0385 7.44451L19.1227 7.76898C19.9506 10.9576 20.3645 12.5519 19.6126 13.6719C19.5377 13.7837 19.4552 13.8902 19.3659 13.9909C18.4707 15 16.8236 15 13.5293 15H10.4708C7.17648 15 5.52933 15 4.63411 13.9909C4.54482 13.8902 4.4624 13.7837 4.38742 13.6719C3.6356 12.5519 4.04951 10.9576 4.87731 7.76897L4.96155 7.44451C5.57045 5.0991 5.87491 3.9264 6.66102 3.15144C6.88891 2.92678 7.14294 2.73028 7.41765 2.56616C7.59981 2.45733 7.79173 2.36942 8.00012 2.29841" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17.5 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
