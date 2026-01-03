import { FC, SVGProps, ReactNode } from 'react';

/**
 * Props for the Icon wrapper component
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Icon size in pixels or any CSS unit
   * @default 24
   */
  size?: number | string;
  
  /**
   * Icon color (any valid CSS color)
   * @default "#292D32"
   */
  color?: string;
  
  /**
   * SVG fill attribute
   * @default "none"
   */
  fill?: string;
  
  /**
   * Additional CSS class names
   * @default ""
   */
  className?: string;
  
  /**
   * Child SVG elements
   */
  children?: ReactNode;
}

/**
 * Base Icon wrapper component for mx-icons
 */
declare const Icon: FC<IconProps>;
export default Icon;
