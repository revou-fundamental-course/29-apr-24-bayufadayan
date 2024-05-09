var slideIndex = 1;
showDivs(slideIndex); // Menampilkan slide pertama saat memuat

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var imgList = document.getElementsByClassName("img-banner");

  if (n > imgList.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = imgList.length;
  }

  for (var i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}


setInterval(() => {
  plusDivs(1);
}, 3000);
