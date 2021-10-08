const root = document.querySelector('.movie-list');
const inputSearch = document.querySelector('.input');

let movieList = JSON.parse(localStorage.getItem("movieList"))|| [];

function handleClick(event){
    console.dir (event.target);
    if(event.target.dataset.crossId){
        deleteMovie(event);
    }
    if(event.target.dataset.btnId){
        handleWatch(event);
    }
}

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
    inputSearch.value = "";
    let movies = movieList.map((movie,index)=> {
        return (
            <li className= "movie" data-id={index}>
                <span>
                    {movie.name}
                </span>
                <button className= {movie.isWatched? "watched":"to-watch"} data-btn-id={index}>
                    {movie.isWatched? "Watched":"To Watch"}
                </button>
                <span data-cross-id = {index}>
                    {"❌"}
                </span>
            </li>
        )
        // let li = React.createElement(
        //     "li",
        //     {
        //         className : "movie",
        //         'data-id' : index

        //     },
        //     React.createElement(
        //         "span",
        //         {},
        //         movie.name
        //     ),
        //     React.createElement(
        //         'button',
        //         {
        //             'data-btn-id' : index,
        //             className : (movie.isWatched)? "watched":"to-watch",
                    
        //         },
        //         movie.isWatched? "Watched" : "To Watch"
        //     ),
        //     React.createElement(
        //         'span',
        //         {
        //             'data-cross-id': index
        //         },
        //         "❌"
        //     ),
        // )
        // root.append(li);
        // return li;
    })
    ReactDOM.render(movies, root);
};

root.addEventListener("click", handleClick);
inputSearch.addEventListener('change', addMovies);
handleUI();