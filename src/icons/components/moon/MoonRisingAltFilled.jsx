import Icon from "../../Icon";

export default function MoonRisingAltFilled({
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z" fill="currentColor" stroke-width="2">
			<animate attributeName="d" dur="0.6s" fill="freeze" values="M7 28c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z;M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z" />
		</path>
		<g fill="none" stroke-dasharray="4">
			<path d="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5" stroke-dashoffset="4">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5" stroke-dashoffset="4">
				<animate attributeName="stroke-dashoffset" begin="1s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5" stroke-dashoffset="4">
				<animate attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
