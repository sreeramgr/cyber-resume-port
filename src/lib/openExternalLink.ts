export function openExternalLink(url: string) {
  if (typeof window === "undefined") return;

  const newWindow = window.open("about:blank", "_blank", "noopener,noreferrer");

  if (newWindow) {
    newWindow.opener = null;
    newWindow.location.href = url;
    return;
  }

  window.location.assign(url);
}