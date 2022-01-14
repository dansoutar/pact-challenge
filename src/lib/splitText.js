const wrapInSpan = (text, index) => {
  const spanEl = document.createElement('span');
  spanEl.textContent = text;
  spanEl.style.setProperty('--index', index);

  return spanEl;
};

export const splitByLetter = (text) => [...text].map(wrapInSpan);

export const splitByWord = (text) => text.split(' ').map(wrapInSpan);
