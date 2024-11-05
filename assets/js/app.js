window.addEventListener("load", function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  });

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  
  OnerrordefaultImage = "https://raw.githubusercontent.com/6mir/q3/refs/heads/main/assets/error-img.png";
  function imageLoaded(img) {
    const loader = img.previousElementSibling;
    loader.style.display = "none";
    img.style.display = "block";
  }
  
  JsonArtic = "https://raw.githubusercontent.com/6mir/q3/refs/heads/main/assets/data/singer.json";
  JsonSong = "https://raw.githubusercontent.com/6mir/q3/refs/heads/main/assets/data/song.json";
  JsonRemix = "https://raw.githubusercontent.com/6mir/q3/refs/heads/main/assets/data/remix.json";
