import Icon from "../../Icon";

export default function BriefcasePlusFilled({
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
		<mask id="SVGYY7Yidkf">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z" fill="currentColor" stroke-dasharray="64" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="64;0" />
					<animate attributeName="fill-opacity" begin="1s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3" fill="none" stroke-dasharray="16" stroke-dashoffset="16">
					<animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" fill="freeze" to="0" />
				</path>
			</g>
			<path d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z" fill="currentColor" opacity="0">
				<set attributeName="opacity" to="1" begin="1.5s" fill="freeze" />
			</path>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGYY7Yidkf)" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="8">
		<path d="M16 19h6" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" fill="freeze" to="0" />
		</path>
		<path d="M19 16v6" stroke-dashoffset="8">
			<animate attributeName="stroke-dashoffset" begin="1.7s" dur="0.2s" fill="freeze" to="0" />
		</path>
	</g>
    </Icon>
  );
}
