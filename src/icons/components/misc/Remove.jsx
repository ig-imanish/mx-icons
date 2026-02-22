import Icon from "../../Icon";

export default function Remove({
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
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="22">
		<path d="M5 5l14 14">
			<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="22;0" />
		</path>
		<path d="M19 5l-14 14" stroke-dashoffset="22">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
