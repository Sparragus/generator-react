function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function toTitleCase(text) {
  return text
    .split(/[^a-zA-Z0-9]/)
    .map(capitalize)
    .join('');
}

module.exports = {
  capitalize,
  toTitleCase
};
