import { useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import { icons as ICONS, CopyLinear, TickCircleLinear, GithubLinear, GitForkLinear, StarOutline, NewTwitterLinear } from "./icons";
import { matchesAlias } from "./icons/aliases";

function App() {
  const [query, setQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState("#292D32");
  const [activeVariant, setActiveVariant] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [version, setVersion] = useState("");
  const [gitStars, setgitStars] = useState("");
  const [gitForks, setgitForks] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    const isManual = localStorage.getItem("darkModeManual") === "true";

    if (saved !== null && isManual) {
      return JSON.parse(saved);
    }

    //match system preference from window properties
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });
  const iconsPerPage = 100;
  const currentYear = new Date().getFullYear();

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

  const GITHUB_REPO_OWNER = "ig-imanish";
  const GITHUB_REPO_NAME = "mx-icons";

  const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`;
  const GITHUB_REPO_URL = `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`;

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
  }, [GITHUB_API_URL]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Listen for system theme preference changes
  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      const isManual = localStorage.getItem("darkModeManual") === "true";

      // Only update if user hasn't manually set a preference
      if (!isManual) {
        setIsDarkMode(e.matches);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemThemeChange);
      return () => {
        mediaQuery.removeListener(handleSystemThemeChange);
      };
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Mark as manually set when user toggles
    localStorage.setItem("darkModeManual", "true");
  };

  // Get all available variants
  const allVariants = useMemo(() => {
    if (!ICONS || ICONS.length === 0) return [];
    const variantSet = new Set();
    ICONS.forEach((group) => {
      group.variants?.forEach((v) => variantSet.add(v.variant));
    });
    return ["all", ...Array.from(variantSet).sort()];
  }, []);

  // Filter icons by active variant
  const flatIcons = useMemo(() => {
    const list = [];

    if (activeVariant === "all") {
      // Show all variants of all icons
      ICONS.forEach((group) => {
        group.variants?.forEach((variantIcon) => {
          list.push({
            groupName: group.name,
            groupSlug: group.slug,
            ...variantIcon,
          });
        });
      });
    } else {
      // Show only the selected variant
      ICONS.forEach((group) => {
        const variantIcon = group.variants?.find(
          (v) => v.variant === activeVariant
        );
        if (variantIcon) {
          list.push({
            groupName: group.name,
            groupSlug: group.slug,
            ...variantIcon,
          });
        }
      });
    }

    return list;
  }, [activeVariant]);

  // Filter by search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return flatIcons;
    return flatIcons.filter((icon) => {
      const matchesDirectSearch =
        icon.slug?.toLowerCase().includes(q) ||
        icon.componentName?.toLowerCase().includes(q) ||
        icon.groupName?.toLowerCase().includes(q) ||
        icon.groupSlug?.toLowerCase().includes(q);

      // Also check if the search query matches any alias
      const matchesAliasSearch = matchesAlias(
        icon.groupSlug || icon.slug || "",
        q
      );

      return matchesDirectSearch || matchesAliasSearch;
    });
  }, [query, flatIcons]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / iconsPerPage);
  const paginatedIcons = useMemo(() => {
    const startIndex = (currentPage - 1) * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    return filtered.slice(startIndex, endIndex);
  }, [filtered, currentPage, iconsPerPage]);

  // Reset to page 1 when search or variant changes
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  async function copyCode(code) {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIcon("code");
      setTimeout(() => setCopiedIcon(null), 1500);
    } catch (e) {
      console.error("copy failed", e);
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

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-top">
            <div className="logo-section">
              <div className="logo-icon">
                <img src="/mx-icons.png" alt="" />
              </div>
              <h1 className="logo-text">mxicons</h1>
              {version && <span className="version-badge">v{version}</span>}
            </div>
            <div className="header-actions-top">
              <button
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="20"
                    height="20"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="20"
                    height="20"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <a
                className="share-button"
                href="https://twitter.com/intent/tweet?text=Excited%20to%20share%20MX%20Icons%20%0A-%20Open%20source%0A-%20Awesome%20icons%0A%0ALink%20%3A%20https%3A%2F%2Fmx-icons.vercel.app%0A%0A%40mx_icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewTwitterLinear color="" height={16} width={16}/>
                Share on Twitter
              </a>

              <a
                className="github-link"
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={`github-card ${isDarkMode ? "dark" : "light"}`}>
                  <div className="github-left">
                    <GithubLinear color={isDarkMode ? "white" : "black"} height={16} width={16} />
                  </div>

                  <div className="github-right">
                    <div className="repo-name">ig-imanish/mx-icons</div>

                    <div className="repo-stats">
                      <div className="stat">
                        <StarOutline
                          color={isDarkMode ? "white" : "black"}
                          width={12}
                          height={12}
                        />
                        <span>{gitStars}</span>

                      </div>

                      <div className="stat">
                        <GitForkLinear color={isDarkMode ? "white" : "black"} height={15} width={15} />
                        <span>{gitForks}</span>
                      </div>
                    </div>
                  </div>
                </div></a>
            </div>
          </div>

          <div className="header-info">
            <div className="info-item">
              <span className="info-count">{ICONS.length} icons</span>
              <span className="info-separator">·</span>
              <span className="info-text">Open source</span>
              <span className="info-separator">·</span>
              <span className="info-text">React & Vue libraries</span>
            </div>
          </div>

          <h2 className="tagline">
            Open source, Beautiful icons For React project.
          </h2>

          <div className="header-actions">
            <a
              className="action-button primary"
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Contribution
            </a>
            <Link to="/installation" className="action-button secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
              >
                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Get Started
            </Link>
            {/* <button className="action-button secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
              >
                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Twitter
            </button> */}
          </div>
        </div>
      </header >

      <div className="container">
        <div className="search-wrapper">
          <label htmlFor="icon-search" className="search-label">
            Search Icons
          </label>
          <input
            id="icon-search"
            className="search-input"
            type="text"
            placeholder="Search all icons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search icons by name or keywords"
          />
        </div>

        <div className="variant-tabs">
          {allVariants.map((variant) => (
            <button
              key={variant}
              className={`variant-tab ${activeVariant === variant ? "active" : ""
                }`}
              onClick={() => setActiveVariant(variant)}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </button>
          ))}
          <div className="variant-info">
            {filtered.length} icons •{" "}
            {activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)}{" "}
            style
          </div>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            <div className="pagination-info">
              Page {currentPage} of {totalPages}
            </div>
            <button
              className="pagination-button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}

        <div className="icons-grid">
          {paginatedIcons.map((icon) => (
            <button
              key={icon.slug}
              className="icon-card"
              onClick={() => openIconModal(icon)}
              title={`Customize ${icon.componentName}`}
            >
              <div className="icon-display">
                <icon.Component
                  size={24}
                  color={isDarkMode ? "#f8fafc" : "#3B3C3D"}
                />
              </div>
              <div className="icon-name">{icon.componentName}</div>
            </button>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            <div className="pagination-info">
              Page {currentPage} of {totalPages}
            </div>
            <button
              className="pagination-button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}

        {selectedIcon && (
          <div className="modal-overlay" onClick={closeIconModal}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeIconModal}>
                ✕
              </button>

              <h2 className="modal-title">{selectedIcon.componentName}</h2>

              <div className="modal-preview ">
                <selectedIcon.Component size={iconSize} color={iconColor} />
              </div>

              <div className="modal-controls ">
                <div className="control-group">
                  <label>
                    Size: <strong>{iconSize}px</strong>
                  </label>
                  <input
                    type="range"
                    min="8"
                    max="96"
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                  />
                </div>

                <div className="control-group">
                  <label>
                    Color: <strong>{iconColor}</strong>
                  </label>
                  <input
                    type="color"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-code">
                <h3>How to use</h3>
                <pre>
                  <button
                    className={`code-copy-btn ${copiedIcon === "code" ? "copied" : ""
                      }`}
                    data-tooltip="Copy to clipboard"
                    onClick={() =>
                      copyCode(
                        `import { ${selectedIcon.componentName} } from 'mx-icons'\n\n<${selectedIcon.componentName} size={${iconSize}} color="${iconColor}" />`
                      )
                    }
                    aria-label="Copy code"
                  >
                    {copiedIcon === "code" ? (
                      <TickCircleLinear
                        size={16}
                        color={isDarkMode ? "#ffffff" : "#000000"}
                      />
                    ) : (
                      <CopyLinear
                        size={16}
                        color={isDarkMode ? "#ffffff" : "#000000"}
                      />
                    )}
                  </button>
                  <code>
                    <span className="keyword">import</span>
                    <span className="punctuation"> {"{ "}</span>
                    <span className="component-name">
                      {selectedIcon.componentName}
                    </span>
                    <span className="punctuation">{" } "}</span>
                    <span className="keyword">from</span>
                    <span className="prop-value"> 'mx-icons'</span>
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
                    <span className="prop-value">"{iconColor}"</span>
                    {"\n"}
                    <span className="punctuation">{"/>"}</span>
                  </code>
                </pre>
                <button
                  className={`copy-button ${copiedIcon === "code" ? "copied" : ""
                    }`}
                  onClick={() =>
                    copyCode(
                      `import { ${selectedIcon.componentName} } from 'mx-icons'\n\n<${selectedIcon.componentName} size={${iconSize}} color="${iconColor}" />`
                    )
                  }
                >
                  {copiedIcon === "code" ? (
                    <>
                      <TickCircleLinear
                        size={16}
                        color={isDarkMode ? "#ffffff" : "#000000"}
                      />
                      <span
                        style={{ color: isDarkMode ? "#ffffff" : "#000000" }}
                      >
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <CopyLinear
                        size={16}
                        color={isDarkMode ? "#ffffff" : "#000000"}
                      />
                      <span
                        style={{ color: isDarkMode ? "#ffffff" : "#000000" }}
                      >
                        Copy Code
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No icons found matching "{query}"</p>
          </div>
        )}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/mx-icons.png" alt="" />
                <span>mxicons</span>
              </div>
              <p className="footer-tagline">
                Open source, Beautiful icons For React project.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons">GitHub</a>
                  </li>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons/releases" target="_blank" rel="noopener noreferrer">
                      Releases
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Community</h3>
                <ul>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons/discussions" target="_blank" rel="noopener noreferrer">
                      Discussions
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/mx_icons" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons/issues" target="_blank" rel="noopener noreferrer">
                      Report Issue
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                      Contributing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>More</h3>
                <ul>
                  <li>
                    <a href="https://github.com/ig-imanish/mx-icons/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                      License
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/package/mx-icons" target="_blank" rel="noopener noreferrer">
                      NPM Package
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} MX Icons. Released under the MIT License.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/ig-imanish/mx-icons"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/mx_icons"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
