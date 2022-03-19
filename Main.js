var audio = $("#sound")[0];
$("#audioWrap").onclick(function() {
  audio.play();
}).onclick(function() {
  audio.pause();
});