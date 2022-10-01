


const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

toggle.addEventListener("click", () => {
    darkMode = darkMode ? false :true;

    body.classList.toggle("dark")
      ? (toggle.firstElementChild.className = "far fa-moon")
      : (toggle.firstElementChild.className = "far fa-sun");
      
    if(darkMode){
        document.querySelector('.bg').src="Background-dark2.jpg";
        document.querySelector('body').classList.add('dark');
    }
    if(!darkMode){
        document.querySelector('.bg').src="Background-light.jpg";
        document.querySelector('body').classList.remove('dark');
    }
  });

