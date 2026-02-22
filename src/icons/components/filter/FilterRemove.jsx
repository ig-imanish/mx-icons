import Icon from "../../Icon";

export default function FilterRemove({
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
		<path d="M3 4h14l-5 6.5v9.5l-4 -4v-5.5Z" stroke-dasharray="54">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="54;0" />
		</path>
		<g stroke-dasharray="12">
			<path d="M16 15l6 6" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" fill="freeze" to="0" />
			</path>
			<path d="M16 21l6 -6" stroke-dashoffset="12">
				<animate attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" fill="freeze" to="0" />
			</path>
		</g>
	</g>
    </Icon>
  );
}
