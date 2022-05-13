import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function initialise() {
  if (cssHasLoaded('ag-theme-custom-react')) {
    ReactDOM.render(<App />, document.getElementById('root'));
  } else {
    setTimeout(initialise, 100);
  }
}
function cssHasLoaded(theme) {
  // test if the theme has loaded by looking for the effect of a known style,
  // in this case we know that the theme applies padding to cells
  const themeEl = document.createElement('div');
  document.body.appendChild(themeEl);
  try {
    themeEl.className = theme;
    const cellEl = document.createElement('div');
    cellEl.className = 'ag-cell';
    themeEl.appendChild(cellEl);
    const computedStyle = window.getComputedStyle(cellEl);
    return parseFloat(computedStyle.paddingLeft) > 0;
  } finally {
    document.body.removeChild(themeEl);
  }
}

initialise();
