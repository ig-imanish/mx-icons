#!/usr/bin/env node

/**
 * Generate TypeScript declaration file from index.js exports
 * This script parses src/icons/index.js and generates complete type definitions
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INDEX_JS_PATH = path.join(__dirname, "../src/icons/index.js");
const OUTPUT_PATH = path.join(__dirname, "../src/icons/index.d.ts");
const ICON_OUTPUT_PATH = path.join(__dirname, "../src/icons/Icon.d.ts");

console.log("🔍 Parsing index.js for icon exports...");

// Read the index.js file
const indexContent = fs.readFileSync(INDEX_JS_PATH, "utf-8");

// Extract all icon component names from export statements
const exportRegex = /export \{ ([^}]+) \} from/g;
const iconNames = new Set();

let match;
while ((match = exportRegex.exec(indexContent)) !== null) {
  const exports = match[1].split(",").map((s) => s.trim());
  exports.forEach((exportName) => {
    // Skip 'Icon' export
    if (exportName !== "Icon") {
      iconNames.add(exportName);
    }
  });
}

// Also check for direct Icon export
if (indexContent.includes("export { Icon }")) {
  iconNames.add("Icon");
}

// Sort icon names alphabetically
const sortedIconNames = Array.from(iconNames).sort();

console.log(`✅ Found ${sortedIconNames.length} icon components`);

// Generate TypeScript declaration file
const typeDefinitions = `import { FC, SVGProps } from 'react';

/**
 * Props for all icon components in mx-icons
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
}

/**
 * Icon component type
 */
export type IconComponent = FC<IconProps>;

// Icon exports (auto-generated from index.js)
${sortedIconNames
  .map((name) => `export const ${name}: IconComponent;`)
  .join("\n")}

/**
 * Icon variants metadata
 */
export interface IconVariant {
  variant: string;
  slug: string;
  Component: IconComponent;
  componentName: string;
}

export interface IconGroup {
  name: string;
  slug: string;
  variants: IconVariant[];
}

/**
 * All available icons with their variants
 */
export const icons: IconGroup[];
`;

// Write the file
fs.writeFileSync(OUTPUT_PATH, typeDefinitions, "utf-8");

// Generate Icon.d.ts
const iconDefinition = `import { FC, SVGProps, ReactNode } from 'react';

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
`;

fs.writeFileSync(ICON_OUTPUT_PATH, iconDefinition, "utf-8");

console.log(`✅ Generated TypeScript declarations at: ${OUTPUT_PATH}`);
console.log(`✅ Generated Icon.d.ts at: ${ICON_OUTPUT_PATH}`);
console.log(`📊 Total exports: ${sortedIconNames.length} icon components`);
console.log("🎉 Icon types generation done!");
