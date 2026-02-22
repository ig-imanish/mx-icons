import Icon from "../../Icon";

export default function ArrowDownCircle({
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
		<path d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z" stroke-dasharray="60">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
		</path>
		<path d="M12 7l0 9.5" stroke-dasharray="12" stroke-dashoffset="12">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M12 17l4 -4M12 17l-4 -4" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
