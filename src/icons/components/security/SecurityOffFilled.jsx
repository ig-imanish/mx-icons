import Icon from "../../Icon";

export default function SecurityOffFilled({
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
		<mask id="SVGE4WtYbtp">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 2l-8 3.5v6.5c0 3.5 3.5 8 8 10c4.5 -1 8 -6.5 8 -10v-6.5l-8 -3.5Z" stroke="currentColor" fill="currentColor" stroke-dasharray="60" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
					<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M-1 11h26" stroke="currentColor" fill="none" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="1.1s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGE4WtYbtp)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.1s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
