import Icon from "../../Icon";

export default function Patreon({
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
      <g stroke="currentColor" stroke-linejoin="round">
		<path d="M4 2.5v19" fill="none" stroke-width="3">
			<animate attributeName="d" dur="0.4s" fill="freeze" values="M4 2.5v0;M4 2.5v19" />
		</path>
		<path d="M14.88 3.5c3.38 0 6.12 2.74 6.12 6.13c0 3.38 -2.74 6.12 -6.12 6.12c-3.39 0 -6.13 -2.75 -6.13 -6.12c0 -3.39 2.74 -6.13 6.13 -6.13Z" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="42" stroke-dashoffset="42" fill-opacity="0">
			<animate attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" fill="freeze" to="0" />
			<animate attributeName="fill-opacity" begin="0.9s" dur="0.5s" fill="freeze" to="1" />
		</path>
	</g>
    </Icon>
  );
}
