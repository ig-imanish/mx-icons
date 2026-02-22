import Icon from "../../Icon";

export default function SwitchFilled({
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
      <defs>
		<mask id="SVGW7uQhc5V">
			<path d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="54" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="54;0" />
				<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<circle cx="17" cy="12" r="3" fill="currentColor" opacity="0">
				<animate attributeName="opacity" begin="0.6s" dur="0.2s" fill="freeze" to="1" />
			</circle>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGW7uQhc5V)" />
    </Icon>
  );
}
