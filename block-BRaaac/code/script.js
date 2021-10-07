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

function createElement(type,attr = {}, ...children){
    const element = document.createElement(type);
    for(let key in attr){
        if(key.startsWith('data-')){
            element.setAttribute(key, attr[key]);
        }else{
            element[key] = attr[key];
        }
    }
    children.forEach((child)=> {
        if(typeof child === "object"){
            element.append(child);
        }
        if(typeof child === "string"){
            let node = document.createTextNode(child);
            element.append(node);
        }
    });
    return element;
}

function handleUI(){
    root.innerHTML = "";
    inputSearch.value = "";
    movieList.forEach((movie,index)=> {
        let li = createElement(
            "li",
            {
                className : "movie",
                'data-id' : index

            },
            createElement(
                "span",
                {},
                movie.name
            ),
            createElement(
                'button',
                {
                    'data-btn-id' : index,
                    className : (movie.isWatched)? "watched":"to-watch",
                    
                },
                movie.isWatched? "Watched" : "To Watch"
            ),
            createElement(
                'span',
                {
                    'data-cross-id': index
                },
                "❌"
            ),
        )
        li.addEventListener("click", handleClick);
        root.append(li);
    })
};

inputSearch.addEventListener('change', addMovies);
handleUI();