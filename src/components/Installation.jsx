import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyLinear, TickCircleLinear, NoteTextLinear } from "../icons";
import "./Installation.css";

function Installation() {
    const [activeTab, setActiveTab] = useState("npm");
    const [copied, setCopied] = useState(false);
    const [copiedCode, setCopiedCode] = useState(false);
    const [version, setVersion] = useState("");
    const [activeSection, setActiveSection] = useState("install");
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) return JSON.parse(saved);
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const installCommands = {
        npm: "npm install mx-icons",
        pnpm: "pnpm add mx-icons",
        yarn: "yarn add mx-icons",
        bun: "bun add mx-icons",
    };

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["install", "usage", "props"];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const copyCommand = () => {
        navigator.clipboard.writeText(installCommands[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const copyCodeBlock = () => {
        const code = `import { NoteTextLinear } from "mx-icons";

                    function App() {
                    return <NoteTextLinear size={24} color="#292D32" />
                    }`;
        navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

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

    return (
        <div className="installation-page">
            <header className="header">
                <div className="header-content">
                    <div className="header-top">
                        <div className="logo-section">
                            <Link to="/" className="logo-link">
                                <div className="logo-icon">
                                    <img src="/mx-icons.png" alt="MX Icons" />
                                </div>
                                <h1 className="logo-text">mxicons</h1>
                                {version && <span className="version-badge">v{version}</span>}
                            </Link>
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
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="18"
                                    height="18"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                <span>Share on Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="docs-container">
                <main className="docs-content">
                    <h1 className="page-title">Installation Guide</h1>
                    <p className="page-description">
                        How to install and use MX Icons in your React project.
                    </p>
                    <section id="install" className="docs-section">
                        <h2>📦 Install</h2>
                        <p>Choose your preferred package manager to install MX Icons:</p>
                        <div className="install-tabs">
                            <div className="tab-list">
                                {Object.keys(installCommands).map((pm) => (
                                    <button
                                        key={pm}
                                        className={`tab-btn ${activeTab === pm ? "active" : ""}`}
                                        onClick={() => setActiveTab(pm)}
                                    >
                                        {pm}
                                    </button>
                                ))}
                            </div>
                            <div className="code-block">
                                <span className="prefix">$</span>
                                <code>{installCommands[activeTab]}</code>
                                <button
                                    className="copy-btn"
                                    onClick={copyCommand}
                                    aria-label="Copy command"
                                >
                                    {copied ? (
                                        <TickCircleLinear size={18} color={isDarkMode ? "#fff" : "#000"} />
                                    ) : (
                                        <CopyLinear size={18} color={isDarkMode ? "#fff" : "#000"} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="usage" className="docs-section">
                        <h2>🚀 Usage</h2>
                        <div className="usage-card">
                            <div className="usage-header">
                                <div className="usage-title">Quick Start</div>
                                <div className="usage-description">
                                    Import icons from mx-icons and use them as React components.
                                </div>
                            </div>
                            <div className="usage-content">
                                <div className="usage-code-container">
                                    <button
                                        className="copy-btn"
                                        onClick={copyCodeBlock}
                                        aria-label="Copy code"
                                        style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10 }}
                                    >
                                        {copiedCode ? (
                                            <TickCircleLinear size={18} color={isDarkMode ? "#fff" : "#000"} />
                                        ) : (
                                            <CopyLinear size={18} color={isDarkMode ? "#fff" : "#000"} />
                                        )}
                                    </button>
                                    <pre>
                                        <code>
                                            <span className="keyword">import</span>{" "}
                                            <span className="punctuation">{"{"}</span>{" "}
                                            <span className="component">NoteTextLinear</span>{" "}
                                            <span className="punctuation">{"}"}</span>{" "}
                                            <span className="keyword">from</span>{" "}
                                            <span className="string">"mx-icons"</span>;
                                            {"\n\n"}
                                            <span className="keyword">function</span> <span className="component">App</span>() {"{"}
                                            {"\n  "}
                                            <span className="keyword">return</span> <span className="tag">{"<NoteTextLinear"}</span>{" "}
                                            <span className="attr-name">size</span>
                                            <span className="punctuation">={"{"}</span>
                                            <span className="number">24</span>
                                            <span className="punctuation">{"}"}</span>{" "}
                                            <span className="attr-name">color</span>
                                            <span className="punctuation">="</span>
                                            <span className="string">#292D32</span>
                                            <span className="punctuation">"</span> <span className="tag">{"/>"}</span>
                                            {"\n"}
                                            {"}"}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="props" className="docs-section">
                        <h2>🎨 Props & Customization</h2>
                        <p>All icon components accept the following props for customization:</p>
                        <div className="table-container">
                            <table className="props-table">
                                <thead>
                                    <tr>
                                        <th>Prop</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>size</code></td>
                                        <td><code>number | string</code></td>
                                        <td><code>24</code></td>
                                        <td>Icon width and height (px or any CSS unit)</td>
                                    </tr>
                                    <tr>
                                        <td><code>color</code></td>
                                        <td><code>string</code></td>
                                        <td><code>"#292D32"</code></td>
                                        <td>Icon color (any CSS color)</td>
                                    </tr>
                                    <tr>
                                        <td><code>className</code></td>
                                        <td><code>string</code></td>
                                        <td><code>""</code></td>
                                        <td>Additional CSS classes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <div className="back-button-container">
                        <Link to="/" className="back-button">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                width="20"
                                height="20"
                            >
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Icons
                        </Link>
                    </div>
                </main>

                <aside className="docs-toc">
                    <div className="toc-sticky">
                        <h3>On this page</h3>
                        <ul>
                            <li>
                                <a
                                    href="#install"
                                    className={activeSection === "install" ? "active" : ""}
                                >
                                    Install
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#usage"
                                    className={activeSection === "usage" ? "active" : ""}
                                >
                                    Usage
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#props"
                                    className={activeSection === "props" ? "active" : ""}
                                >
                                    Props & Customization
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Installation;