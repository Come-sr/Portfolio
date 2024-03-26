const video = document.getElementById("video-bg");

video.addEventListener("ended", function() {
  video.currentTime = 0;
  video.play();
});

window.addEventListener("scroll", function() {
  const video = document.getElementById("video-bg");
  const rect = video.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    video.classList.remove("blur");
  } else {
    video.classList.add("blur");
  }
});