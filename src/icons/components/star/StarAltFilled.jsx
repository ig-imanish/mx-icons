import Icon from "../../Icon";

export default function StarAltFilled({
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
      <path d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="66" fill-opacity="0">
		<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="66;0" />
		<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
	</path>
    </Icon>
  );
}
