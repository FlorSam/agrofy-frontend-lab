window.onscroll = function (){

scrollFunction = () => {
  let header = document.getElementById("myHeader");

  let scroll = header.offsetTop;
  if (window.pageYOffset > scroll) {
    header.className.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
  console.log("scrollFunction");
};
scrollFunction();
};
