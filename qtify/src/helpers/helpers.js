export const truncate = (text, length = 20) => {
  if (!text) return "";
  return text.length > length
    ? text.slice(0, length) + "..."
    : text;
};
