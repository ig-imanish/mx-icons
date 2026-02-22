import Icon from "../../Icon";

export default function Pencil({
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
		<g stroke-width="2">
			<path d="M3 21l2 -6l11 -11c1 -1 3 -1 4 0c1 1 1 3 0 4l-11 11l-6 2" stroke-dasharray="56">
				<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="56;0" />
			</path>
			<path d="M15 5l4 4" stroke-dasharray="8" stroke-dashoffset="8">
				<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
		<path d="M6 15l3 3" stroke-dasharray="8" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
