const range = document.getElementById("rangeTrack");

range.addEventListener("change", () => {
  const newValue = range.value;
  document.getElementById("rangeValue").innerHTML = newValue;
});
