function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function toTitleCase (s) {
  return s.split(/[^a-zA-Z0-9]/).map(capitalize).join('')
}

module.exports = {
  capitalize,
  toTitleCase,
}
