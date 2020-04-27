document.getElementById("keyword").addEventListener("change", function () {
  if (document.getElementById("keyword") > 1) {
    document.getElementById("input-x").style.visibility = "visible";
  } else {
    document.getElementById("input-x").style.visibility = "hidden";
  }
});
