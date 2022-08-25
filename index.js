document.querySelector("#id-checkbox").addEventListener("click", (event) => {
    document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
  }, false);