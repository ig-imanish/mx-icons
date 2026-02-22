import Icon from "../../Icon";

export default function LaptopFilled({
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
		<path d="M12 17h-7v-10h14v10Z" fill="currentColor" stroke-dasharray="50" fill-opacity="0">
			<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="50;0" />
			<animate attributeName="fill-opacity" begin="1s" dur="0.4s" fill="freeze" to="1" />
		</path>
		<path d="M3 19h18" fill="none" stroke-dasharray="20" stroke-dashoffset="20">
			<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
