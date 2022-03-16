const message = document.querySelector('#message')

addMovie = (event) =>{
  event.preventDefault();
  let inputField = document.querySelector("input")
    
  const movie = document.createElement('li')
    
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn)
    
  const list = document.querySelector("ul");
  list.appendChild(movie);

    
  inputField.value = ''  
}

document.querySelector('form').addEventListener('submit', addMovie)


deleteMovie = (event) =>{
    event.target.parentNode.remove()
    message.textContent = 'erased from existence (jk, nothing is really deleted. DUN DUN DUN)'
} 

crossOffMovie = (event) =>{
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
    message.textContent = 'Movie watched'
     } else {
    message.textContent = 'movie added back'
     }
    }