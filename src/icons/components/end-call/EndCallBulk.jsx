import React from "react";
import Icon from "../../Icon";

export default function EndCallBulk({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8 12.862L8 13.4785C8 14.3308 7.42329 15.0826 6.57997 15.3297L4.57997 15.9159C3.29561 16.2923 2 15.3626 2 14.0646L2 12.1417C2 11.6528 2.1247 11.1707 2.44083 10.7892C3.17325 9.90523 4.87862 8.28205 8 7.47782V12.862ZM16 12.862V13.2502C16 14.2066 16.7227 15.0195 17.7004 15.1628L19.7004 15.4558C20.9105 15.6332 22 14.727 22 13.5432V11.4185C22 10.8316 21.8162 10.2545 21.3703 9.85628C20.5528 9.12621 18.8785 7.97567 16 7.38232V12.862Z" fill="currentColor"/>
      <path opacity="0.5" d="M12 11.3963C16 11.3963 16 12.8617 16 12.8617V7.38205C14.862 7.14749 13.5359 7 12 7C10.4641 7 9.13797 7.18435 8 7.47755V12.8617C8 12.8617 8 11.3963 12 11.3963Z" fill="currentColor"/>
    </Icon>
  );
}
