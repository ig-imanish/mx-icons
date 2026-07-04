import React from "react";
import Icon from "../../Icon";

export default function WeigherTwotone({
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
      <path opacity="0.5" d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.4115 9.97078L17.0771 8.30671C17.5513 7.12125 16.8084 5.80104 15.549 5.59114L15.1235 5.52023C13.0554 5.17555 10.9445 5.17555 8.87638 5.52023L8.45095 5.59114C7.19154 5.80104 6.44861 7.12125 6.92279 8.30671L7.58842 9.97078C7.82419 10.5602 8.45912 10.8848 9.07499 10.7309C10.9954 10.2508 13.0045 10.2508 14.9249 10.7309C15.5408 10.8848 16.1757 10.5602 16.4115 9.97078Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10.1796 9.92856L9.50464 8.0459" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
