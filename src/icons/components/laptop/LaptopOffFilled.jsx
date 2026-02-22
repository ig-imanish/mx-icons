import Icon from "../../Icon";

export default function LaptopOffFilled({
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
		<mask id="SVGC6qundYy">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M12 17h-7v-10h14v10Z" stroke="currentColor" fill="currentColor" stroke-dasharray="50" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="50;0" />
					<animate attributeName="fill-opacity" begin="1s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<g fill="none">
					<path d="M3 19h18" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20">
						<animate attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" fill="freeze" to="0" />
					</path>
					<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
						<animate attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" fill="freeze" to="0" />
					</path>
				</g>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGC6qundYy)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
