import React from "react";
import Icon from "../../Icon";

export default function WeigherBroken({
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
      <path d="M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82475 20.7706 4.69989 20.8985 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15.1235 5.52027L15.549 5.59118C16.8084 5.80108 17.5513 7.12128 17.0771 8.30674L16.4115 9.97082C16.1757 10.5602 15.5408 10.8849 14.9249 10.7309C13.0045 10.2508 10.9954 10.2508 9.07499 10.7309C8.45912 10.8849 7.82419 10.5602 7.58842 9.97082L6.92279 8.30675C6.44861 7.12128 7.19154 5.80108 8.45095 5.59118L8.87638 5.52027C9.58042 5.40293 10.2894 5.32554 11 5.28809" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10.1796 9.92856L9.50464 8.0459" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
