document.querySelectorAll(".color-choose .input").forEach((el) => {
  el.addEventListener("click", function () {
    let color = el.getAttribute("data-image");

    /* Removing classes */
    document.querySelectorAll(".input").forEach((ele) => {
      ele.classList.remove("active");
    });

    document.querySelectorAll(".left-column img").forEach((ele) => {
      ele.classList.remove("active");
    });

    document.querySelectorAll(".wrapper").forEach((ele) => {
      ele.className = "";
      ele.classList.add("wrapper");
    });

    document.querySelectorAll(".btn").forEach((ele) => {
      ele.className = "";
      ele.classList.add("btn");
      ele.classList.add("custom-file-input");
    });

    /* Updating classes */
    document
      .querySelectorAll(`.left-column img[data-image = ${color}]`)
      .forEach((ele) => {
        ele.classList.add("active");
      });
    document
      .querySelectorAll(`.input[data-image = ${color}]`)
      .forEach((ele) => {
        ele.classList.add("active");
      });

    document.querySelectorAll(".wrapper").forEach((ele) => {
      ele.classList.add(color);
    });

    document.querySelectorAll(".btn").forEach((ele) => {
      ele.classList.add(color);
    });


    const imgContainer = document.getElementById("img-container");
    const loaderContainer = document.getElementById("loader-container");

    imgContainer.classList.add("opacity-0");
    loaderContainer.classList.remove("opacity-0")
    
    document.getElementById("loader-img").setAttribute("fill", color);
    setTimeout(() => {
      loaderContainer.classList.add("opacity-0");
      imgContainer.classList.remove("opacity-0");
    }, 2000);


  });
});

var uploadBtn = document.getElementById("upload-button");

var imageInput = document.getElementById("image-input");
var previewImage = document.getElementById("preview-image");
var uploadBtnText = document.getElementById("fileUploadBtnText");

uploadBtn.addEventListener("click", function () {
  imageInput.click();
});

imageInput.addEventListener("change", function (e) {
  if (e.target.files.length == 0) {
    return;
  }
  var tempUrl = URL.createObjectURL(e.target.files[0]);
  previewImage.setAttribute("src", tempUrl);
  console.log("name *** ", e.target.files[0]);
  const fileName = e.target.files[0].name;
  uploadBtnText.innerText = fileName;
});
