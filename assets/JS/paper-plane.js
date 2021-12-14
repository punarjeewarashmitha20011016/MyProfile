var timeOut;
document.getElementById("contact-link").addEventListener('mouseover', function () {
  document.getElementById("contact-link").className = "active text nodecoration flex horizontal";
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    document.getElementById("contact-link").className = "text nodecoration flex horizontal";
  }, 4000);
})