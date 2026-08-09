import { useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
// Import the few UI icons we need directly.
// This avoids pulling the entire giant icon barrel (thousands of modules)
// into the initial demo bundle.
import CopyLinear from "./icons/components/copy/CopyLinear.jsx";
import TickCircleLinear from "./icons/components/tick-circle/TickCircleLinear.jsx";
import NewTwitterLinear from "./icons/components/new-twitter/NewTwitterLinear.jsx";
import { iconMeta } from "./icons/icon-meta";
import { LazyIcon } from "./icons/loadIcon";
import { loadIconComponent } from "./icons/iconLoader.jsx";
import { matchesAlias } from "./icons/aliases";
import InstallCmdCard from "./components/InstallCmdCard";
import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  GITHUB_REPO_URL,
  GITHUB_API_URL,
  GITHUB_ISSUE_URL,
} from "./constants";

function getAnimationClass(slug) {
  if (!slug) return "scale";
  const s = slug.toLowerCase();
  if (
    s.includes("setting") ||
    s.includes("gear") ||
    s.includes("refresh") ||
    s.includes("rotate") ||
    s.includes("loader") ||
    s.includes("spinner") ||
    s.includes("sync") ||
    s.includes("sun")
  ) {
    return "spin";
  }
  if (
    s.includes("bell") ||
    s.includes("notification") ||
    s.includes("alert") ||
    s.includes("alarm") ||
    s.includes("volume") ||
    s.includes("music")
  ) {
    return "wiggle";
  }
  if (
    s.includes("heart") ||
    s.includes("like") ||
    s.includes("love") ||
    s.includes("favorite") ||
    s.includes("star") ||
    s.includes("activity") ||
    s.includes("chart") ||
    s.includes("pulse") ||
    s.includes("health")
  ) {
    return "pulse";
  }
  if (
    s.includes("download") ||
    s.includes("upload") ||
    s.includes("import") ||
    s.includes("export") ||
    s.includes("send") ||
    s.includes("arrow-down") ||
    s.includes("arrow-up")
  ) {
    return "bounce-y";
  }
  if (
    s.includes("arrow-left") ||
    s.includes("arrow-right") ||
    s.includes("next") ||
    s.includes("back") ||
    s.includes("forward") ||
    s.includes("reply")
  ) {
    return "bounce-x";
  }
  if (s.includes("copy") || s.includes("layer")) {
    return "copy";
  }
  if (s === "trash" || s.startsWith("trash-") || s === "trush-square") {
    return "trash";
  }
  return "scale";
}

function App() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState("#292D32");
  const [activeVariant, setActiveVariant] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [gitStars, setgitStars] = useState("");
  const [gitForks, setgitForks] = useState("");
  const [version, setVersion] = useState("");
  const { pathname } = useLocation();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const iconsPerPage = 72; // Reduced for faster first paint + fewer initial dynamic imports
  const currentYear = new Date().getFullYear();

  // Debounce search input so we don't recompute the 6k-item filter on every keystroke
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 140);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const formatCount = (value) => {
          if (value >= 1000) {
            return Math.floor(value / 1000) + "k";
          }
          return value;
        };
        setgitStars(formatCount(data?.stargazers_count ?? 0));
        setgitForks(formatCount(data?.forks_count ?? 0));
      } catch (error) {
        console.error("Failed to load GitHub stats:", error);
      }
    };
    fetchGitHubStats();
  }, []);

  useEffect(() => {
    fetch("https://registry.npmjs.org/mx-icons")
      .then((response) => response.json())
      .then((data) => {
        const latestVersion =
          data?.distTags?.latest || data?.["dist-tags"]?.latest || "";
        setVersion(latestVersion);
      })
      .catch((err) => console.error("Failed to load version", err));
  }, []);

  // Lightweight metadata only (no heavy component imports at startup)
  const allVariants = useMemo(() => {
    if (!iconMeta || iconMeta.length === 0) return ["all"];
    // All icons share the same variant list
    const first = iconMeta[0];
    return ["all", ...(first?.variants || [])];
  }, []);

  const flatIcons = useMemo(() => {
    const list = [];
    if (activeVariant === "all") {
      iconMeta.forEach((group) => {
        (group.variants || []).forEach((variantName) => {
          // Build a stable item shape compatible with the rest of the app
          const baseSlug = group.slug;
          const compNameBase = baseSlug
            .split("-")
            .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : ""))
            .join("");
          const componentName = `${compNameBase}${variantName.charAt(0).toUpperCase() + variantName.slice(1)}`;

          list.push({
            groupName: group.name,
            groupSlug: group.slug,
            variant: variantName,
            slug: `${baseSlug}-${variantName}`,
            componentName,
            // Component will be loaded on demand via LazyIcon / loadIconComponent
          });
        });
      });
    } else {
      iconMeta.forEach((group) => {
        if (group.variants?.includes(activeVariant)) {
          const baseSlug = group.slug;
          const compNameBase = baseSlug
            .split("-")
            .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : ""))
            .join("");
          const componentName = `${compNameBase}${activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)}`;

          list.push({
            groupName: group.name,
            groupSlug: group.slug,
            variant: activeVariant,
            slug: `${baseSlug}-${activeVariant}`,
            componentName,
          });
        }
      });
    }
    return list;
  }, [activeVariant]);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return flatIcons;
    return flatIcons.filter((icon) => {
      const matchesDirectSearch =
        icon.slug?.toLowerCase().includes(q) ||
        icon.componentName?.toLowerCase().includes(q) ||
        icon.groupName?.toLowerCase().includes(q) ||
        icon.groupSlug?.toLowerCase().includes(q);
      const matchesAliasSearch = matchesAlias(
        icon.groupSlug || icon.slug || "",
        q,
      );
      return matchesDirectSearch || matchesAliasSearch;
    });
  }, [debouncedQuery, flatIcons]);

  const totalPages = Math.ceil(filtered.length / iconsPerPage);
  const paginatedIcons = useMemo(() => {
    const startIndex = (currentPage - 1) * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    return filtered.slice(startIndex, endIndex);
  }, [filtered, currentPage, iconsPerPage]);

  // Preload the icon chunks for the currently visible page.
  // Because we use dynamic imports, this warms the cache without
  // including any icon code in the main initial bundle.
  useEffect(() => {
    // Slight delay so we don't compete with critical first paint
    const t = setTimeout(() => {
      paginatedIcons.forEach((icon) => {
        loadIconComponent(icon.groupSlug, icon.variant).catch(() => {});
      });
    }, 80);
    return () => clearTimeout(t);
  }, [paginatedIcons]);

  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  async function copyCode(code) {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
        copied = true;
      }
    } catch (e) {
      console.error("clipboard api copy failed", e);
    }
    if (!copied) {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        copied = document.execCommand("copy");
      } catch (e) {
        console.error("fallback copy failed", e);
      } finally {
        document.body.removeChild(textarea);
      }
    }
    if (copied) {
      setCopiedIcon("code");
      setTimeout(() => setCopiedIcon(null), 1500);
    } else {
      console.error("copy failed");
    }
  }

  function openIconModal(icon) {
    setSelectedIcon(icon);
    setIconSize(24);
    setIconColor(isDarkMode ? "#f8fafc" : "#292D32");
  }

  function closeIconModal() {
    setSelectedIcon(null);
  }

  const handleReset = () => {
    setQuery("");
    setActiveVariant("all");
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <Navbar
        onLogoClick={handleReset}
        logoText="mx-icons"
        version={version}
        showNpm={true}
        githubStats={{ stars: gitStars, forks: gitForks }}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="page-wrap">
        <header className="hero">
          {/* <div className="hero-eyebrow">
            <span>Open Source · MIT</span>
            <span>
              {ICONS.length.toLocaleString()} icons
              {version ? ` · v${version}` : ""}
            </span>
          </div>*/}

          <div className="hero-brand" style={{ marginTop: "40px" }}>
            <img src="/mx-icons.png" alt="" className="hero-logo" />
            <h1 className="hero-title">mx-icons</h1>
          </div>

          <p className="hero-tagline">
            Open source, beautiful icons for React projects. Beautiful SVG
            components with multiple style variants — linear, bold, bulk, and
            more. Tree-shakable, customizable, and ready for your app or design
            system.
          </p>

          <p className="hero-contribute">
            Have an icon to contribute?{" "}
            <a
              href={GITHUB_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit it here
            </a>
          </p>

          <div className="hero-install">
            <InstallCmdCard />
          </div>

          <div className="hero-actions">
            <a
              className="action-button primary"
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Contribution
            </a>
            <Link to="/installation" className="action-button secondary">
              Installation
            </Link>
            <a
              className="action-button secondary"
              href="https://twitter.com/intent/tweet?text=Excited%20to%20share%20MX%20Icons%20%0A-%20Open%20source%0A-%20Awesome%20icons%0A%0ALink%20%3A%20https%3A%2F%2Fmx-icons.vercel.app%0A%0A%40mx_icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewTwitterLinear color="currentColor" height={16} width={16} />
              Share
            </a>
          </div>
        </header>

        <div className="gallery-controls">
          <div className="gallery-controls-row">
            <label className="search-wrapper" htmlFor="icon-search">
              <span className="search-prefix" aria-hidden="true">
                /
              </span>
              <span className="search-label">Search Icons</span>
              <input
                id="icon-search"
                className="search-input"
                type="text"
                placeholder={`search ${filtered.length.toLocaleString()} icons...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search icons by name or keywords"
              />
            </label>

            <div
              className="variant-tabs"
              role="tablist"
              aria-label="Icon style variants"
            >
              {allVariants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  role="tab"
                  aria-selected={activeVariant === variant}
                  className={`variant-tab ${activeVariant === variant ? "active" : ""}`}
                  onClick={() => setActiveVariant(variant)}
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* <p className="gallery-meta">
          {query
            ? `${filtered.length.toLocaleString()} matches for "${query}"`
            : `${filtered.length.toLocaleString()} icons · ${variantLabel} style · click any to customize`}
        </p>*/}

        {filtered.length === 0 ? (
          <div className="no-results">
            <p>No icons found matching &ldquo;{query}&rdquo;</p>
          </div>
        ) : (
          <div className="icons-grid">
            {paginatedIcons.map((icon) => (
              <button
                key={icon.slug}
                type="button"
                className={`icon-card anim-${getAnimationClass(icon.groupSlug)}`}
                onClick={() => openIconModal(icon)}
                title={`Customize ${icon.componentName}`}
                aria-label={`Customize ${icon.componentName}`}
              >
                <div className="icon-display">
                  <LazyIcon
                    slug={icon.groupSlug}
                    variant={icon.variant}
                    size={32}
                    color={isDarkMode ? "#f8fafc" : "currentColor"}
                  />
                </div>
                <div className="icon-name">{icon.componentName}</div>
              </button>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <div className="pagination-group">
              <button
                type="button"
                className="pagination-button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                className="pagination-button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {selectedIcon && (
          <div className="modal-overlay" onClick={closeIconModal}>
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="icon-modal-title"
            >
              <button
                type="button"
                className="modal-close"
                onClick={closeIconModal}
                aria-label="Close icon details"
              >
                <span className="modal-close-icon" aria-hidden="true" />
              </button>

              <div className="modal-header">
                <h2 id="icon-modal-title" className="modal-title">
                  {selectedIcon.componentName}
                </h2>
              </div>

              <div className="modal-customizer">
                <div className="modal-preview">
                  <LazyIcon
                    slug={selectedIcon.groupSlug}
                    variant={selectedIcon.variant}
                    size={iconSize}
                    color={iconColor}
                  />
                </div>

                <div className="modal-controls">
                  <div className="control-group">
                    <label htmlFor="icon-size-control">
                      Size <strong>{iconSize}px</strong>
                    </label>
                    <input
                      id="icon-size-control"
                      type="range"
                      min="8"
                      max="96"
                      value={iconSize}
                      onChange={(e) => setIconSize(Number(e.target.value))}
                    />
                  </div>

                  <div className="control-group">
                    <label htmlFor="icon-color-control">
                      Color <strong>{iconColor}</strong>
                    </label>
                    <input
                      id="icon-color-control"
                      type="color"
                      value={iconColor}
                      onChange={(e) => setIconColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-code">
                <h3>How to use</h3>
                <pre>
                  <button
                    type="button"
                    className={`code-copy-btn ${copiedIcon === "code" ? "copied" : ""}`}
                    data-tooltip="Copy to clipboard"
                    onClick={() =>
                      copyCode(
                        `import {\n  ${selectedIcon.componentName}\n} from 'mx-icons'\n\n<${selectedIcon.componentName}\n  size={${iconSize}}\n  color="${iconColor}"\n/>`,
                      )
                    }
                    aria-label="Copy code"
                  >
                    {copiedIcon === "code" ? (
                      <TickCircleLinear size={16} color="currentColor" />
                    ) : (
                      <CopyLinear size={16} color="currentColor" />
                    )}
                  </button>
                  <code>
                    <span className="keyword">import</span>
                    <span className="punctuation"> {"{"}</span>
                    {"\n  "}
                    <span className="component-name">
                      {selectedIcon.componentName}
                    </span>
                    {"\n"}
                    <span className="punctuation">{"} "}</span>
                    <span className="keyword">from</span>
                    <span className="prop-value"> &apos;mx-icons&apos;</span>
                    {"\n\n"}
                    <span className="punctuation">{"<"}</span>
                    <span className="component-name">
                      {selectedIcon.componentName}
                    </span>
                    {"\n  "}
                    <span className="prop-name">size</span>
                    <span className="punctuation">={"{"}</span>
                    <span className="prop-value">{iconSize}</span>
                    <span className="punctuation">{"}"}</span>
                    {"\n  "}
                    <span className="prop-name">color</span>
                    <span className="punctuation">=</span>
                    <span className="prop-value">&quot;{iconColor}&quot;</span>
                    {"\n"}
                    <span className="punctuation">{"/>"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer currentYear={currentYear} gitStars={gitStars} />
    </div>
  );
}

export default App;
