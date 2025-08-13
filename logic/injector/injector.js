export const headerInjector = function () {
  return fetch("/components/header/header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;
    })
    .catch((err) => console.error("Error loading header:", err));
};
