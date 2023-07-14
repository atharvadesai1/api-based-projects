const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const displayMovie = document.getElementById("displayMovies")

const getMovies = async(url) => {
    const response = await fetch(url) 
    const data  = await response.json()
    console.log(data) 
    showMovies(data)
}

const showMovies = (data) => {
    data.results.forEach(
        (element) => {
        let imagePath = element.poster_path === null ? "colourful3.jpg" : IMGPATH + element.poster_path
        const newMovie  = document.createElement('div')
        newMovie.classList.add('box')


        newMovie.innerHTML = `
        <img class="poster" src="${imagePath}" alt="">
        <div class="overlay">
            <h1>${element.original_title}
            </h1>
            <div class="rating">
            <span>${element.vote_average}</span> &nbsp;<img src="star.png" alt="" class="star" width="22px" height="22px">
            </div><br>
            <p class="release_date">Release Date: ${element.release_date}</p>
            <br><br>
            <h2>Overview:</h2><br>
            <p>${element.overview}</p>
        </div>`

        displayMovie.appendChild(newMovie)
    })
    console.log(displayMovie)        
}

const msg = document.getElementById('innerSearch')
getMovies(APIURL)


function searchMovies(){
    if(msg.value != ""){
        console.log(msg.value)
        displayMovie.innerHTML= ""
        getMovies(SEARCHAPI + msg.value)
    }
    else{
        displayMovie.innerHTML= ""
        getMovies(APIURL)
    }
}

