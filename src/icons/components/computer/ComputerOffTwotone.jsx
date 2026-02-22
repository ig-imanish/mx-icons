import Icon from "../../Icon";

export default function ComputerOffTwotone({
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
		<mask id="SVGGyQtGbpm">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<g stroke="currentColor">
					<path d="M12 21h5M12 21h-5M12 21v-4" fill="none" stroke-dasharray="8">
						<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="8;0" />
					</path>
					<path d="M12 17h-9v-12h18v12Z" fill="currentColor" fill-opacity="0" stroke-dasharray="62" stroke-dashoffset="62">
						<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" fill="freeze" to="0" />
						<animate attributeName="fill-opacity" begin="1s" dur="0.15s" fill="freeze" to="0.3" />
					</path>
				</g>
				<path d="M-1 11h26" stroke="currentColor" fill="none" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="1.25s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGGyQtGbpm)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="1.25s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
