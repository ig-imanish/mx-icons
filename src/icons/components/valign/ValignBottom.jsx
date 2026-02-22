import Icon from "../../Icon";

export default function ValignBottom({
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
		<path d="M2.5 8.5h19M2.5 15.5h19" stroke-dasharray="22">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="22;0" />
		</path>
		<path d="M12 9h6v12h-12v-12Z" stroke-width="2" stroke-dasharray="50" stroke-dashoffset="50">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
