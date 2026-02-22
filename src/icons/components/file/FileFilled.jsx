import Icon from "../../Icon";

export default function FileFilled({
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
		<mask id="SVGyxlMAzPg">
			<g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z" stroke="currentColor" fill="currentColor" stroke-dasharray="62" fill-opacity="0">
					<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="62;0" />
					<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
				</path>
				<path d="M14 3.5l0 4.5l4.5 0Z" stroke="currentColor" fill="currentColor" opacity="0">
					<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
					<animate attributeName="d" begin="0.6s" dur="0.2s" fill="freeze" values="M14 3.5l2.25 2.25l2.25 2.25Z;M14 3.5l0 4.5l4.5 0Z" />
				</path>
			</g>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVGyxlMAzPg)" />
	<path d="M13.5 3l5.5 5.5" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0">
		<set attributeName="opacity" to="1" begin="0.6s" fill="freeze" />
	</path>
    </Icon>
  );
}
