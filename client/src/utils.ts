export function fetchFromAPI(
  url: string,
  init?: RequestInit
): Promise<Response> {
  return window.fetch(url, {
    credentials: "same-origin",
    headers: [["Content-Type", "application/json"]],
    ...init,
  });
}
