const aboutUsAnchor = document.getElementById("about_Us");

const aboutUsAnchorClickHandler = function () {
  window.open("https://www.linkedin.com/in/amrmagdydb/", "_blank");
  setTimeout(() => {
    window.open(
      "https://www.linkedin.com/in/taha-ibrahim-24918b265/",
      "_blank"
    );
  }, 500);
};

aboutUsAnchor.addEventListener("click", aboutUsAnchorClickHandler);
