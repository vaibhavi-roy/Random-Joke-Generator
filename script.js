const jokeEl = document.getElementById('joke');          // div id = joke        
const get_joke = document.getElementById('get_joke');    // button id = get_joke 
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
let darkMode = false;
get_joke.addEventListener('click', generateJoke);
generateJoke();                                          

async function generateJoke(){  // async makes a function return a Promise
    // call the icanhaz API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {      // await makes a function wait for a Promise
        headers: {
            'Accept': 'application/json'      


        }
    });

    const joke = await jokeRes.json();  // save     

 
    jokeEl.innerHTML = joke.joke;    
}
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

