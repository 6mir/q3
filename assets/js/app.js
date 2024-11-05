window.addEventListener("load", function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  
  OnerrordefaultImage = "/assets/error-img.png";
  function imageLoaded(img) {
    const loader = img.previousElementSibling;
    loader.style.display = "none";
    img.style.display = "block";
  }
  
  JsonArtic = "/assets/data/singer.json";
  JsonSong = "/assets/data/song.json";
  JsonRemix = "/assets/data/remix.json";