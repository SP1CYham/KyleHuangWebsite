// resolve a path to a file in /public against the app's base URL

// accepts "/favicon.svg", "favicon.svg", "public/favicon.svg", "./favicon.svg"
// etc. Leaves full URLs (http(s), protocol-relative, data:) untouched
// should look like: "/KyleHuangWebsite/favicon.svg"

export default function asset(path?: string | null): string {
  if (!path) return '';

  // already an absolute URL / protocol-relative / data URI 
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith('data:')) return path;

  const base = import.meta.env.BASE_URL; // trailing slash, e.g. "/KyleHuangWebsite/"

  // already resolved against the base — don't prefix twice
  if (path.startsWith(base)) return path;

  // strip any leading "./", "/", or "public/" segments, then prefix with base
  const cleaned = path.replace(/^(?:\.?\/|public\/)+/i, '');
  return base + cleaned;
}
