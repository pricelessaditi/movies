var wrapper = Popcorn.HTMLYouTubeVideoElement("#video");
wrapper.src = "https://www.youtube.com/shorts/IETnIoz-jFQ";
pop = Popcorn(wrapper);

pop.footnote({
  start: 1,
  end: 5,
  text: "Works with youtube!",
  target: "footnote-div"
});

pop.play();
