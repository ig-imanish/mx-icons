import Icon from "../../Icon";

export default function ArrowAlignMiddle({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M3 12l18 0" stroke-dasharray="20">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="20;0" />
		</path>
		<path d="M12 2l0 6.5M12 22l0 -6.5" stroke-dasharray="10" stroke-dashoffset="10">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 9l3 -3M12 15l3 3M12 9l-3 -3M12 15l-3 3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
