# Contributing to MX Icons

Thank you for your interest in contributing to MX Icons! We appreciate your time and effort in helping make this library better for everyone. This guide will help you get started with contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Adding New Icons](#adding-new-icons)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing](#testing)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone. Please be kind, constructive, and professional in all interactions.

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher)
- **Git**

### Development Setup

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the [MX Icons repository](https://github.com/ig-imanish/mx-icons)

2. **Clone your fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/mx-icons.git
   cd mx-icons
   ```

3. **Add upstream remote**
   
   ```bash
   git remote add upstream https://github.com/ig-imanish/mx-icons.git
   ```

4. **Install dependencies**
   
   ```bash
   npm install
   ```

5. **Start the development server**
   
   ```bash
   npm run dev
   ```
   
   The preview app will be available at `http://localhost:5173`

6. **Verify everything works**
   
   Open your browser and navigate to the local server to ensure the icon library is working correctly.

## 📁 Project Structure

```
mx-icons/
├── src/
│   ├── icons/
│   │   ├── components/      # Individual icon components
│   │   ├── Icon.jsx         # Base Icon component
│   │   ├── index.js         # Exports all icons
│   │   └── aliases.js       # Icon name aliases
│   ├── App.jsx              # Preview app
│   ├── App.css              # Preview app styles
│   └── main.jsx             # Entry point
├── dist/                    # Build output (generated)
├── public/                  # Static assets
├── eslint.config.js         # ESLint configuration
├── vite.config.js           # Vite config for preview app
├── vite.lib.config.js       # Vite config for library build
├── package.json             # Package metadata
└── README.md                # Project documentation
```

## 🤝 How to Contribute

There are many ways you can contribute to MX Icons:

### 1. Report Bugs

Found a bug? Please [open an issue](https://github.com/ig-imanish/mx-icons/issues/new) with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, React version)

### 2. Request New Icons

Need an icon that doesn't exist yet? [Create an issue](https://github.com/ig-imanish/mx-icons/issues/new) with:
- Icon name and description
- Use case or context
- Reference images or examples (if available)

### 3. Add New Icons

See the [Adding New Icons](#adding-new-icons) section below for detailed instructions.

### 4. Improve Documentation

Help us improve our documentation by:
- Fixing typos or unclear explanations
- Adding examples
- Improving code comments
- Translating documentation

### 5. Fix Bugs or Implement Features

Browse our [open issues](https://github.com/ig-imanish/mx-icons/issues) and pick one to work on!

## 🎨 Adding New Icons

### Icon Requirements

- **Format**: SVG only
- **Size**: 24x24px viewport (standard), 16x16px (mini variant)
- **Style**: Clean, minimal, professional
- **Color**: Use `currentColor` for fills/strokes to allow customization
- **Optimization**: Optimize SVGs (remove unnecessary attributes, simplify paths)

### Steps to Add a New Icon

1. **Create the icon directory**
   
   ```bash
   mkdir -p src/icons/components/icon-name
   ```

2. **Create the icon component**
   
   Create `src/icons/components/icon-name/index.jsx`:
   
   ```jsx
   import React from "react";
   import Icon from "../../Icon";
   
   export const IconNameLinear = (props) => (
     <Icon {...props}>
       <path d="..." fill="none" stroke="currentColor" strokeWidth="1.5" />
     </Icon>
   );
   
   export const IconNameBold = (props) => (
     <Icon {...props}>
       <path d="..." fill="currentColor" />
     </Icon>
   );
   
   export const IconNameMini = (props) => (
     <Icon {...props} size={16}>
       <path d="..." fill="currentColor" />
     </Icon>
   );
   ```

3. **Export the icon**
   
   Add to `src/icons/index.js`:
   
   ```javascript
   export { IconNameLinear, IconNameBold, IconNameMini } from "./components/icon-name";
   ```

4. **Add alias (optional)**
   
   If the icon has common alternative names, add to `src/icons/aliases.js`:
   
   ```javascript
   export { IconNameLinear as AlternativeNameLinear } from "./components/icon-name";
   ```

5. **Test the icon**
   
   ```bash
   npm run dev
   ```
   
   Search for your icon in the preview app and verify all variants work correctly.

6. **Build the library**
   
   ```bash
   npm run build:lib
   ```
   
   Ensure there are no build errors.

### Icon Naming Convention

- Use **PascalCase** for component names
- Suffix with variant: `Linear`, `Bold`, or `Mini`
- Use descriptive, clear names (e.g., `UserLinear`, `CalendarBold`)
- Folder names should be **kebab-case** (e.g., `user`, `calendar`, `add-circle`)

## 💅 Code Style Guidelines

We use ESLint to maintain code quality. Please follow these guidelines:

### JavaScript/JSX

- Use **ES6+ syntax**
- Use **functional components** with hooks
- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Add **semicolons** at the end of statements
- Keep components **simple and focused**

### Example

```jsx
import React from "react";
import Icon from "../../Icon";

export const ExampleLinear = (props) => (
  <Icon {...props}>
    <path 
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
  </Icon>
);
```

### CSS

- Use **meaningful class names**
- Follow **BEM methodology** when appropriate
- Keep styles **modular and reusable**
- Use **CSS variables** for theming

### Linting

Run ESLint before committing:

```bash
npm run lint
```

## 🧪 Testing

### Manual Testing

1. **Start the dev server**
   
   ```bash
   npm run dev
   ```

2. **Test your changes**
   - Verify the icon renders correctly
   - Test all variants (Linear, Bold, Mini)
   - Test with different sizes and colors
   - Check responsiveness

3. **Build the library**
   
   ```bash
   npm run build:lib
   ```
   
   Ensure the build completes without errors.

### Testing Checklist

Before submitting a PR, verify:

- [ ] Icon renders in all variants (Linear, Bold, Mini)
- [ ] Icon accepts and applies `size` prop
- [ ] Icon accepts and applies `color` prop
- [ ] Icon accepts and applies `className` prop
- [ ] Icon maintains aspect ratio
- [ ] Icon is visible in the preview app
- [ ] No console errors or warnings
- [ ] Build completes successfully
- [ ] No ESLint errors

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear and meaningful commit history.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature or icon
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates

### Examples

```bash
feat(icons): add calendar icon with all variants

fix(modal): hide scrollbar in modal card

docs(readme): update installation instructions

style(icons): format user icon component

refactor(build): optimize vite configuration
```

### Best Practices

- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- Keep the subject line under 72 characters
- Reference issues in the footer (e.g., "Closes #123")

## 🔄 Pull Request Process

### Before Submitting

1. **Sync with upstream**
   
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Create a feature branch**
   
   ```bash
   git checkout -b feature/icon-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes**
   
   Follow the guidelines in this document

4. **Run linting**
   
   ```bash
   npm run lint
   ```

5. **Test your changes**
   
   ```bash
   npm run dev
   npm run build:lib
   ```

6. **Commit your changes**
   
   ```bash
   git add .
   git commit -m "feat(icons): add new calendar icon"
   ```

7. **Push to your fork**
   
   ```bash
   git push origin feature/icon-name
   ```

### Submitting the PR

1. Go to the [MX Icons repository](https://github.com/ig-imanish/mx-icons)
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with:
   - Clear description of changes
   - Screenshots (for icon additions)
   - Related issue numbers
   - Testing performed

### PR Title Format

Follow the same convention as commit messages:

```
feat(icons): add calendar icon with all variants
fix(modal): resolve scrollbar display issue
docs(contributing): add testing guidelines
```

### Review Process

- A maintainer will review your PR within 1-3 business days
- Address any requested changes
- Once approved, a maintainer will merge your PR
- Your contribution will be included in the next release!

### PR Checklist

Before submitting, ensure:

- [ ] Code follows style guidelines
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build:lib`)
- [ ] All manual tests pass
- [ ] Commit messages follow conventional format
- [ ] PR description is clear and complete
- [ ] Screenshots included (for visual changes)
- [ ] Documentation updated (if needed)

## 🚀 Release Process

Releases are managed by maintainers. Here's the typical process:

1. **Version bump** following [Semantic Versioning](https://semver.org/)
   - **MAJOR**: Breaking changes
   - **MINOR**: New features (backward compatible)
   - **PATCH**: Bug fixes

2. **Update changelog** with all changes since last release

3. **Build and publish** to npm

4. **Create GitHub release** with release notes

## 📞 Getting Help

Need help? Here are some resources:

- 📖 [Documentation](https://github.com/ig-imanish/mx-icons/blob/main/README.md)
- 💬 [GitHub Discussions](https://github.com/ig-imanish/mx-icons/discussions)
- 🐛 [Issue Tracker](https://github.com/ig-imanish/mx-icons/issues)

## 🙏 Thank You

Your contributions make MX Icons better for everyone. Whether you're fixing a typo, adding an icon, or improving documentation, every contribution is valuable and appreciated!

---

**Happy Contributing! 🎉**
