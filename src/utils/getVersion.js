import pkg from "../../package.json";

const NPM_REGISTRY_URL = "https://registry.npmjs.org/mx-icons/latest";

export async function getVersion() {
  try {
    const res = await fetch(NPM_REGISTRY_URL);
    if (!res.ok) throw new Error("Failed to fetch from npm registry");

    const data = await res.json();
    return data.version || pkg.version;

  } catch (err) {
    console.warn("Error fetching version from npm registry:", err.message);
    return pkg.version;
  }
}
