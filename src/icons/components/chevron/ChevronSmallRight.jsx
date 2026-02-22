import Icon from "../../Icon";

export default function ChevronSmallRight({
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
      <path d="M15 12l-5 -5M15 12l-5 5" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10">
		<animate attributeName="stroke-dashoffset" dur="0.4s" fill="freeze" values="10;0" />
	</path>
    </Icon>
  );
}
