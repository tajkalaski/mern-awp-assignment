export function fetchFromAPI(
  url: string,
  init?: RequestInit
): Promise<Response> {
  return window.fetch(url, {
    credentials: "same-origin",
    ...init,
  });
}
