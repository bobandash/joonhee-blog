export function formatDate(rawDate: Date) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const commentDate = new Date(rawDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    timeZone: userTimeZone || "UTC",
  }).format(commentDate);

  return formattedDate;
}
