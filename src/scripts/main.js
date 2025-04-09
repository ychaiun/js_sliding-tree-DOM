'use strict';

const listItems = document.querySelectorAll('li');

for (const list of listItems) {
  if (list.children.length !== 0) {
    const span = document.createElement('span');

    span.innerHTML = list.firstChild.textContent.trim();

    list.insertBefore(span, list.firstChild);
    list.firstChild.nextSibling.remove();

    span.addEventListener('click', showHeader);
  }
}

function showHeader() {
  const spanDisplay = this.nextSibling.style;

  if (spanDisplay.display === 'none') {
    spanDisplay.display = '';
  } else {
    spanDisplay.display = 'none';
  }
}
