import Icon from "../../Icon";

export default function AlertCircleTwotone({
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z" fill="currentColor" fill-opacity="0" stroke-dasharray="60">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
			<animate attributeName="fill-opacity" begin="1s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
		<g fill="none">
			<path d="M12 7v6" stroke-dasharray="8" stroke-dashoffset="8">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M12 17v0.01" stroke-dasharray="4" stroke-dashoffset="4">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
