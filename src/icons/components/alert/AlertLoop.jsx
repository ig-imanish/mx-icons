import Icon from "../../Icon";

export default function AlertLoop({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M12 3l9 17h-18l9 -17Z" stroke-width="2" stroke-dasharray="60">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
		</path>
		<path d="M12 10v4" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="6">
			<animate attributeName="stroke-width" begin="0.7s" dur="3s" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" values="2;3;3;2;2" />
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 17v0.01" stroke-width="2" stroke-dasharray="4" stroke-dashoffset="4">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
			<animate attributeName="stroke-width" begin="1s" dur="3s" repeatCount="indefinite" keyTimes="0;0.1;0.2;0.3;1" values="2;3;3;2;2" />
		</path>
	</g>
    </Icon>
  );
}
