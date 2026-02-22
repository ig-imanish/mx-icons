import Icon from "../../Icon";

export default function ValignTopTwotone({
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
		<path d="M2.5 8.5h19M2.5 15.5h19" fill="none" stroke-dasharray="22">
			<animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="22;0" />
		</path>
		<path d="M12 3h6v12h-12v-12Z" fill="currentColor" stroke-width="2" fill-opacity="0" stroke-dasharray="50" stroke-dashoffset="50">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" fill="freeze" to="0" />
			<animate attributeName="fill-opacity" begin="1s" dur="0.15s" fill="freeze" to="0.3" />
		</path>
	</g>
    </Icon>
  );
}
