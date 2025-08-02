const listItems = document.getElementsByClassName("listItem");
const handleOnActiveListItem = function (e) {
  Array.from(listItems).forEach((element) =>
    element.classList.remove("active")
  );
  e.currentTarget.classList.add("active");
};

Array.from(listItems).forEach((element) => {
  element.addEventListener("click", handleOnActiveListItem);
});
console.log(listItems);
