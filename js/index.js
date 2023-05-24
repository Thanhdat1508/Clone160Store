function dropdown__Menu() {
  var main__map = document.querySelector("#map__dropdown");
  var dropDown__map = document.querySelector(".location-store");

  var isClosed = (dropDown__map.style.display = "none");
  if (isClosed) {
    dropDown__map.style.display = "block";
  } else {
    dropDown__map.style.display = "none";
  }
}
