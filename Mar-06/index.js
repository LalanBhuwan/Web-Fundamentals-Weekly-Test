function detailsShorw() {
  var d = document.getElementById("dells");
  var a = document.getElementById("apples");
  if (d.classList.contains("dell")) {
    d.classList.remove("dell");
    a.classList.add("apple");
  } else {
    a.classList.remove("apple");
    d.classList.add("dell");
  }
}
