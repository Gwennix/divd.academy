// utils/normalizeMarkdown.js
export function normalizeMarkdown(md) {
  const lines = md.split("\n");

  // Find minimum indentation (ignore empty lines)
  const minIndent = Math.min(
    ...lines
      .filter(line => line.trim())
      .map(line => line.match(/^ */)[0].length)
  );

  return lines
    .map(line => line.slice(minIndent))
    .join("\n")
    .trim();
}
