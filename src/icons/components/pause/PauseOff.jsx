import Icon from "../../Icon";

export default function PauseOff({
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
		<mask id="SVG78zKpbkJ">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<g stroke="currentColor" stroke-dasharray="30">
					<path d="M7 6h2v12h-2Z">
						<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="30;0" />
					</path>
					<path d="M15 6h2v12h-2Z" stroke-dashoffset="30">
						<animate attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" fill="freeze" to="0" />
					</path>
				</g>
				<path d="M-1 11h26" stroke="currentColor" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
					<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG78zKpbkJ)" />
	<path d="M-1 13h26" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(45 12 12)" stroke-dasharray="28" stroke-dashoffset="28">
		<animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
