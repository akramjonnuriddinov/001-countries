
// const elDarkModeButton = document.querySelector(".dark-mode-btn");

// elDarkModeButton.addEventListener('click', function () {
//     document.body.classList.toggle('dark-mode');
    
// });



// const check = document.getElementById('chk');

// check.addEventListener('change', () => {
//   document.body.classList.toggle('dark-mode');
//   localStorage.darkMode=!localStorage.darkMode;
// });

// window.onload=function() {
//   if(localStorage.darkMode) document.body.classList.toggle('dark-mode');
// }

document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme", "dark");
    const darkModeToggle = document.getElementById("chk");
  
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  
    darkModeToggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark-mode");
  
      if (document.documentElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
});
