const handlebars = require('handlebars');

handlebars.registerHelper('generateGrid', (size) => {
  let gridHTML = '<div class="grid-container">';
  for (let i = 0; i < size * size; i++) {
    const color = getRandomColor();
    gridHTML += `<div style="background-color: #${color}; color: white;">${color}</div>`;
  }
  gridHTML += '</div>';
  return new handlebars.SafeString(gridHTML);
});

function getRandomColor() {
  return ((1 << 24) * Math.random() | 0).toString(16);
}

module.exports = handlebars;
