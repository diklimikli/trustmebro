window.onload = () => {
  const a = document.createElement('a');
  a.href = 'jegy.pdf';
  a.download = 'jegy.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
