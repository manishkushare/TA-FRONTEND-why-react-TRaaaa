const root = document.querySelector('.movie-list');
const inputSearch = document.querySelector('.input');

let movieList = JSON.parse(localStorage.getItem("movieList"))|| [];

function addMovies(event){
    console.dir(event.target);
    let movie = {
        name : event.target.value,
        isWatched : false
    }
    movieList.push(movie);
    console.log(movieList, "add movies");
    localStorage.setItem("movieList", JSON.stringify(movieList));
    handleUI();
}

function handleWatch(event){
    console.dir(event.target);
    let id = event.target.dataset.btnId;
    movieList[id].isWatched = movieList[id].isWatched? false:true;
    localStorage.setItem("movieList", JSON.stringify(movieList));
    handleUI();
 
};

function deleteMovie(event){
    const id = event.target.dataset.crossId
    movieList.splice(id,1);
    localStorage.setItem("movieList", JSON.stringify(movieList));
    handleUI();
}


function handleUI(){
    root.innerHTML = "";
    inputSearch.value = "";
    movieList.forEach((movie,index)=> {
        let li = document.createElement('li');
        li.classList.add('movie')
        let spanMovie = document.createElement('span');
        spanMovie.classList.add = "movie-name";
        spanMovie.innerText = movie.name;
        let btn = document.createElement('button');
        if(movie.isWatched){
            btn.innerText = "Watched";
            btn.style.backgroundColor = "green";
        }else {
            btn.innerText = "To Watch";
        }
        btn.setAttribute('data-btn-id', index);
        btn.addEventListener('click', handleWatch);
        let spanDelete = document.createElement('span');
        spanDelete.innerText = "❌";
        spanDelete.setAttribute('data-cross-id', index);
        spanDelete.addEventListener('click', deleteMovie);
        li.append(spanMovie,btn,spanDelete);
        root.append(li);
    })
};

inputSearch.addEventListener('change', addMovies);
handleUI();