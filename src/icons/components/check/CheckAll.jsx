import Icon from "../../Icon";

export default function CheckAll({
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
		<mask id="SVGkyhmHbfg">
			<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="24">
				<path d="M2 13.5l4 4l10.75 -10.75" stroke="currentColor" stroke-width="2">
					<animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="24;0" />
				</path>
				<path d="M7.5 13.5l4 4l10.75 -10.75" stroke="currentColor" stroke-width="6" stroke-dashoffset="24">
					<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.3s" fill="freeze" to="0" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGkyhmHbfg)" />
	<path d="M7.5 13.5l4 4l10.75 -10.75" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="24" stroke-dashoffset="24">
		<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.3s" fill="freeze" to="0" />
	</path>
    </Icon>
  );
}
