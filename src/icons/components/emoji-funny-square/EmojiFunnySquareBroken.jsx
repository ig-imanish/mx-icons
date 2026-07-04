import React from "react";
import Icon from "../../Icon";

export default function EmojiFunnySquareBroken({
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
      <path d="M20.7964 9.643C21.9075 13.7897 22.4631 15.863 21.5201 17.4964C20.577 19.1298 18.5037 19.6853 14.357 20.7964C10.2103 21.9075 8.13698 22.4631 6.50359 21.5201C4.87021 20.577 4.31466 18.5037 3.20356 14.357C2.09246 10.2103 1.53691 8.13698 2.47995 6.50359C3.42298 4.87021 5.49632 4.31466 9.643 3.20356C13.7897 2.09246 15.863 1.53691 17.4964 2.47995C18.5048 3.06212 19.1023 4.07505 19.6734 5.74061" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M13 16.0004L13.478 16.9742C13.8393 17.7104 14.7249 18.0198 15.4661 17.6689C16.2223 17.311 16.5394 16.4035 16.1708 15.6524L15.7115 14.7168" stroke="currentColor" strokeWidth="1.5"/>
    </Icon>
  );
}
