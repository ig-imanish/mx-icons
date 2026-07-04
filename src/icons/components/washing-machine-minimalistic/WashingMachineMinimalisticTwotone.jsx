import React from "react";
import Icon from "../../Icon";

export default function WashingMachineMinimalisticTwotone({
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
      <path d="M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.23418 14.3624C8.08868 14.7895 9.06745 15.5209 10.724 15.8195C13.0859 16.2453 12.8501 14.1706 15.2121 14.5961C15.9323 14.7258 16.4181 14.9452 16.7616 15.1805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
