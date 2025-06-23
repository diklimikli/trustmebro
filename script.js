window.onload = function () {
  const link = document.createElement("a");
  link.href = "public/jegy.pdf";
  link.download = "jegy.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
