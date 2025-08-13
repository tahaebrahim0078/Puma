const AllProducts = {
  Product1: {
    color: "red",
    title: "Man’s eqt shoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: {
      main: "/Assets/Products/redMainChose.png",
      img1: "/Assets/Products/redImg1.png",
      img2: "/Assets/Products/redImg2.png",
      img3: "/Assets/Products/redImg3.png",
      img4: "/Assets/Products/redImg4.png",
      img5: "/Assets/Products/redImg5.png",
      img6: "/Assets/Products/redImg6.png",
    },
    price: "1200",
  },
  Product2: {
    color: "green",
    title: "Man’s eqt shoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: {
      main: "",
      img1: "/Assets/Products/greenImg1.png",
      img2: "/Assets/Products/greenImg2.png",
      img3: "/Assets/Products/greenImg3.png",
      img4: "/Assets/Products/greenImg4.png",
      img5: "/Assets/Products/greenImg5.png",
      img6: "/Assets/Products/greenImg6.png",
    },
    price: "1200",
  },
  Product3: {
    color: "purحle",
    title: "Man’s eqt shoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: {
      main: "",
      img1: "/Assets/Products/purpleImg1.png",
      img2: "/Assets/Products/purpleImg2.png",
      img3: "/Assets/Products/purpleImg3.png",
      img4: "/Assets/Products/purpleImg4.png",
      img5: "/Assets/Products/purpleImg5.png",
      img6: "/Assets/Products/purpleImg6.png",
    },
    price: "1200",
  },
};

const aboutUsAnchor = document.getElementById("about_Us");
const viewBtn = document.querySelectorAll(".btnView");
console.log(viewBtn);

const aboutUsAnchorClickHandler = function () {
  window.open("https://www.linkedin.com/in/amrmagdydb/", "_blank");
  window.open("https://www.linkedin.com/in/taha-ibrahim-24918b265/");
};

aboutUsAnchor.addEventListener("click", aboutUsAnchorClickHandler);

const viewBtnClickHandler = function (e) {
  console.log(e.target);
  const color = e.target.classList[1];
  e.target.href = `/mainProductPage/main.html?color=${color}`;
};

viewBtn.forEach((button) => {
  button.addEventListener("click", viewBtnClickHandler);
});
