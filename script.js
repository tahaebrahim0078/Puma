const listItems = document.getElementsByClassName("listItem");
const ColorImages = document.getElementsByClassName("colorImg");

const handleOnActiveListItem = function (e) {
  Array.from(listItems).forEach((element) => {
    element.classList.remove("active");

    const currentColor = element.id;
    element.src = `/Assets/${currentColor}.png`;
  });

  e.currentTarget.classList.add("active");
};

function colorImgClickHandler(e) {
  if (e.target.classList.contains("activeColor")) return;

  Array.from(ColorImages).forEach((element) => {
    element.classList.remove("activeColor");

    const currentColor = element.id;
    element.src = `/Assets/color${currentColor}.png`;
  });

  e.target.classList.add("activeColor");
  e.target.src = `/Assets/colorActive.png`;
}

Array.from(listItems).forEach((element) => {
  element.addEventListener("click", handleOnActiveListItem);
});

Array.from(ColorImages).forEach((element) => {
  element.addEventListener("click", colorImgClickHandler);
});
