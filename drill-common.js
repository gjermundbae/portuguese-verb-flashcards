(function () {
  const style = document.createElement('style');
  style.textContent = '.card { scroll-margin-top: 0.75rem; }';
  document.head.appendChild(style);
})();

/** Focus the answer field and keep the card visible (mobile keyboard / innerHTML reset). */
function focusAnswerInput(input) {
  if (!input) return;
  const scrollTarget = input.closest('.card') || input;
  const scrollIntoView = () => {
    scrollTarget.scrollIntoView({ block: 'start', behavior: 'auto' });
  };

  input.focus({ preventScroll: true });
  requestAnimationFrame(scrollIntoView);
  setTimeout(scrollIntoView, 100);
  setTimeout(scrollIntoView, 350);

  if (window.visualViewport) {
    const onKeyboard = () => scrollIntoView();
    window.visualViewport.addEventListener('resize', onKeyboard);
    setTimeout(() => window.visualViewport.removeEventListener('resize', onKeyboard), 600);
  }
}
