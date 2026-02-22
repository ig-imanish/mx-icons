import Icon from "../../Icon";

export default function SecurityFilled({
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
      <path d="M12 2l-8 3.5v6.5c0 3.5 3.5 8 8 10c4.5 -1 8 -6.5 8 -10v-6.5l-8 -3.5Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60" fill-opacity="0">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
		<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
	</path>
    </Icon>
  );
}
