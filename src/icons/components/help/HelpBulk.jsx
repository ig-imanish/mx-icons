import React from "react";
import Icon from "../../Icon";

export default function HelpBulk({
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
      <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
      <path d="M5.47875 19.5818L9.75149 15.309C9.3348 15.0254 8.97447 14.6651 8.69079 14.2484L4.41807 18.5211C4.74471 18.9005 5.09934 19.2551 5.47875 19.5818Z" fill="currentColor"/>
      <path d="M4.41797 5.47912L8.6907 9.75185C8.97436 9.33516 9.33468 8.97485 9.75136 8.69119L5.47863 4.41846C5.09922 4.74509 4.7446 5.09971 4.41797 5.47912Z" fill="currentColor"/>
      <path d="M14.2479 8.69128L18.5206 4.41856C18.9 4.7452 19.2547 5.09982 19.5813 5.47924L15.3085 9.75198C15.0249 9.33529 14.6646 8.97496 14.2479 8.69128Z" fill="currentColor"/>
      <path d="M19.5812 18.521L15.3084 14.2483C15.0248 14.665 14.6645 15.0253 14.2478 15.3089L18.5205 19.5817C18.8999 19.255 19.2545 18.9004 19.5812 18.521Z" fill="currentColor"/>
    </Icon>
  );
}
