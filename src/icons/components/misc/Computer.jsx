import Icon from "../../Icon";

export default function Computer({
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
		<path d="M12 21h5M12 21h-5M12 21v-4" stroke-dasharray="8">
			<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="8;0" />
		</path>
		<path d="M12 17h-9v-12h18v12Z" stroke-dasharray="62" stroke-dashoffset="62">
			<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
