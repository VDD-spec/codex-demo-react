export function parseChecko(html) {
  const nameMatch = html.match(/id="copy-name"[^>]*>([^<]+)/);
  const innMatch = html.match(/id="copy-inn"[^>]*>([^<]+)/);
  return {
    name: nameMatch ? nameMatch[1].trim() : null,
    inn: innMatch ? innMatch[1].trim() : null,
  };
}
