import React from "react";
import Icon from "../../Icon";

export default function BasketballLinear({
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
      <path d="M3.33946 16.9997C6.10089 21.7826 12.2168 23.4214 16.9997 20.66C18.9493 19.5344 20.3765 17.8514 21.1962 15.9286C22.3875 13.1341 22.2958 9.83304 20.66 6.99972C19.0242 4.1664 16.2112 2.43642 13.1955 2.07088C11.1204 1.81935 8.94932 2.21386 6.99972 3.33946C2.21679 6.10089 0.578039 12.2168 3.33946 16.9997Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16.9498 20.5732C16.9498 20.5732 16.0108 13.982 14.0005 10.5C11.9901 7.01798 7.05029 3.42676 7.05029 3.42676" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M21.8638 12.5803C16.4528 11.3933 9.05903 16.348 7.57739 20.8177" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.4141 3.20884C14.9262 7.6299 7.67443 12.5122 2.28877 11.4515" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
