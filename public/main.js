let tb = document.getElementById("topButton");
window.onscroll = function() {showTop()};

let max = 5
function showTop() {
  console.log(document.documentElement.scrollTop)
  if (document.body.scrollTop > max || document.documentElement.scrollTop > max) {
    tb.style.display = "block";
  } else {
    tb.style.display = "none";
  }
}

function topClick() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}