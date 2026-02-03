import React from "react";
import Icon from "../../Icon";

export default function GitForkBold({
    size = 24,
    color = "currentColor",
    className = "",
    ...props
}) {
    return (
        <Icon
            size={size}
            color={color}
            fill="none"
            viewBox="0 0 256 256"
            className={className}
            {...props}
        >
            <circle
                cx="128"
                cy="188"
                r="28"
                stroke="currentColor"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <circle
                cx="188"
                cy="68"
                r="28"
                stroke="currentColor"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <circle
                cx="68"
                cy="68"
                r="28"
                stroke="currentColor"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M68 96v8a24 24 0 0 0 24 24h72a24 24 0 0 0 24 -24v-8"
                stroke="currentColor"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <line
                x1="128"
                y1="128"
                x2="128"
                y2="160"
                stroke="currentColor"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}
