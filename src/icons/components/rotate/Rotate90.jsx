import Icon from "../../Icon";

export default function Rotate90({
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
		<path d="M12 6c3.31 0 6 2.69 6 6v2.5" stroke-dasharray="14">
			<animate attributeName="stroke-dashoffset" dur="0.2s" fill="freeze" values="14;0" />
		</path>
		<path d="M18 15l3 -3M18 15l-3 -3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
