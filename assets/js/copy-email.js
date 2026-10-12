/* Email links still open the visitor's mail app, if one is set up.
   They also copy the address and show a short note, so the click
   is never silent when no mail app is configured. */
(function () {
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  var timer;

  function show(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove("is-visible"); }, 2500);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="mailto:"]');
    if (!link) return;
    var address = decodeURIComponent(link.getAttribute("href").slice(7).split("?")[0]);
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(address).then(
      function () { show("Email copied: " + address); },
      function () {}
    );
  });
})();
