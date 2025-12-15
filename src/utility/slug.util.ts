export function generateSlug(
  name: string,
  provider: string,
  externalId: string
): string {
  return `${name}-${provider}-${externalId}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
