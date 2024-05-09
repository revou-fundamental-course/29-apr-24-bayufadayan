// JS Banner Slider
var slideIndex = 1;
showDivs(slideIndex); // Menampilkan slide pertama saat memuat

function plusDivs(n) {
  showDivs((slideIndex += n));
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

// JS Validation
// const nameInput = document.getElementById("client-name");
// document.getElementById("submit").addEventListener("click", function () {
//     const name = nameInput.value;
//     if (name = "") {
//         document.getElementById('client-name-error').innerText = "Isi boss, jangan di kosongin"
//     }
// })

function validateForm() {
  const name = document.forms["contact-form"]["client-name"].value;
  const email = document.forms["contact-form"]["email"].value;
  const interest = document.forms["contact-form"]["user-interest"].value;
  let isValid = true;
  let errorMessage =
    "<i class='fa-solid fa-circle-exclamation'></i> Harap isi dengan benar.";

  if (name === "") {
    document.getElementById("client-name-error").innerHTML = errorMessage;
    isValid = false;
  } else {
    document.getElementById("client-name-error").innerHTML = "";
  }

  if (email === "" || !validateEmail(email)) {
    document.getElementById("email-error").innerHTML = errorMessage;
    isValid = false;
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (interest === "") {
    document.getElementById("user-interest-error").innerHTML =
      "<i class='fa-solid fa-circle-exclamation'></i> Pilih yang bener";
    isValid = false;
  } else {
    document.getElementById("user-interest-error").innerHTML = "";
  }

  if (isValid) {
    alert("Hi " + name + ", Formulir berhasil dikirim!");
  }

  return isValid;
}

function validateEmail(email) {
  const re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
