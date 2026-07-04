import React from "react";
import Icon from "../../Icon";

export default function EmojiFunnyCircleBroken({
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
      <path d="M8.9126 15.9336C10.1709 16.249 11.5985 16.2492 13.0351 15.8642C14.4717 15.4793 15.7079 14.7653 16.64 13.863" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="14.5094" cy="9.77405" rx="1" ry="1.5" transform="rotate(-15 14.5094 9.77405)" fill="currentColor"/>
      <ellipse cx="8.71402" cy="11.3278" rx="1" ry="1.5" transform="rotate(-15 8.71402 11.3278)" fill="currentColor"/>
      <path d="M13 16.0004L13.478 16.9742C13.8393 17.7104 14.7249 18.0198 15.4661 17.6689C16.2223 17.311 16.5394 16.4035 16.1708 15.6524L15.7115 14.7168" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.92847 4.92663C6.12901 3.72408 7.65248 2.81172 9.41185 2.34029C14.7465 0.910876 20.2299 4.0767 21.6593 9.41136C23.0887 14.746 19.9229 20.2294 14.5882 21.6588C9.25357 23.0882 3.7702 19.9224 2.34078 14.5877C1.86936 12.8284 1.89775 11.0528 2.33892 9.41186" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </Icon>
  );
}
