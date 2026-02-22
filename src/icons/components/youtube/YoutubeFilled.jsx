import Icon from "../../Icon";

export default function YoutubeFilled({
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
		<mask id="SVG6L0addMu">
			<path d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60" fill-opacity="0">
				<animate attributeName="stroke-dashoffset" dur="0.6s" fill="freeze" values="60;0" />
				<animate attributeName="fill-opacity" begin="0.6s" dur="0.4s" fill="freeze" to="1" />
			</path>
			<path d="M10 8.5l6 3.5l-6 3.5Z" fill="currentColor" opacity="0">
				<set attributeName="opacity" to="1" begin="1.1s" fill="freeze" />
				<animate attributeName="d" begin="1.1s" dur="0.2s" fill="freeze" values="M12 11l0 1l0 1Z;M10 8.5l6 3.5l-6 3.5Z" />
			</path>
		</mask>
	</defs>
	<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#SVG6L0addMu)" />
    </Icon>
  );
}
