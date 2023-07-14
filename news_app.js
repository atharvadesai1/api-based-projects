let general = document.getElementById('general')
let buisness = document.getElementById('buisness')
let entertainment = document.getElementById('entertainment')
let health = document.getElementById('health')
let science = document.getElementById('science')
let sports = document.getElementById('sports')
let technology = document.getElementById('technology')
const newsSlot = document.getElementById('newsSlot')
const newsImage = document.getElementsByClassName('newsImage')
const headline = document.getElementsByTagName('h4')


const generalAPI = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8307c0895dd84009918704df0d47d6be';
const buisnessAPI = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8307c0895dd84009918704df0d47d6be"
const entertainmentAPI = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8307c0895dd84009918704df0d47d6be"
const healthAPI = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8307c0895dd84009918704df0d47d6be"
const scienceAPI = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8307c0895dd84009918704df0d47d6be"
const sportsAPI = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8307c0895dd84009918704df0d47d6be"
const technologyAPI = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8307c0895dd84009918704df0d47d6be"
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'indian-news.p.rapidapi.com'
// 	}
// };


const printingGeneralURL = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    showNews(data)
}
printingGeneralURL(generalAPI)


function showNews(data){
    data.articles.forEach(element => {
        let dataToShow = document.createElement('div')
        dataToShow.classList.add("newsImage")
        let posterImage = element.urlToImage
        let title = element.title
        let urlLink = element.url

        dataToShow.innerHTML = `<img src="${posterImage}" alt="" height="250px" width="350px">
        <div class="content">
            <h4>${title}</h4>
        </div>
        <a class="readMore" href="${urlLink}" target="_blank">Read More</a>`
        newsSlot.appendChild(dataToShow)

    });
}


general.style.backgroundColor = "red"
buisness.style.backgroundColor = "#f5f5f5"
health.style.backgroundColor = "#f5f5f5"
science.style.backgroundColor = "#f5f5f5"
sports.style.backgroundColor = "#f5f5f5"
technology.style.backgroundColor = "#f5f5f5"
entertainment.style.backgroundColor = "#f5f5f5"

function generalFunction(currentState) {
    currentState.className = "nav-link active"
    buisness.className = "nav-link text-danger"
    health.className = "nav-link text-danger"
    science.className = "nav-link text-danger"
    sports.className = "nav-link text-danger"
    technology.className = "nav-link text-danger"
    entertainment.className = "nav-link text-danger"
    general.style.backgroundColor = "red"
    buisness.style.backgroundColor = "#f5f5f5"
    health.style.backgroundColor = "#f5f5f5"
    science.style.backgroundColor = "#f5f5f5"
    sports.style.backgroundColor = "#f5f5f5"
    technology.style.backgroundColor = "#f5f5f5"
    entertainment.style.backgroundColor = "#f5f5f5"

    newsSlot.innerHTML = ""

    const printingGeneralURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingGeneralURL(generalAPI)

}

function buisnessFunction(currentState) {
    currentState.className = "nav-link active"
    general.className = "nav-link text-danger"
    entertainment.className = "nav-link text-danger"
    health.className = "nav-link text-danger"
    science.className = "nav-link text-danger"
    sports.className = "nav-link text-danger"
    technology.className = "nav-link text-danger"
    general.style.backgroundColor = "#f5f5f5"
    buisness.style.backgroundColor = "red"
    health.style.backgroundColor = "#f5f5f5"
    science.style.backgroundColor = "#f5f5f5"
    sports.style.backgroundColor = "#f5f5f5"
    technology.style.backgroundColor = "#f5f5f5"
    entertainment.style.backgroundColor = "#f5f5f5"

    newsSlot.innerHTML = ""

    const printingBuisnessURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingBuisnessURL(buisnessAPI)    

}

function entertainmentFunction(currentState) {
    currentState.className = "nav-link active"
    general.className = "nav-link text-danger"
    buisness.className = "nav-link text-danger"
    health.className = "nav-link text-danger"
    science.className = "nav-link text-danger"
    sports.className = "nav-link text-danger"
    technology.className = "nav-link text-danger"
    general.style.backgroundColor = "#f5f5f5"
    buisness.style.backgroundColor = "#f5f5f5"
    health.style.backgroundColor = "#f5f5f5"
    science.style.backgroundColor = "#f5f5f5"
    sports.style.backgroundColor = "#f5f5f5"
    technology.style.backgroundColor = "#f5f5f5"
    entertainment.style.backgroundColor = "red"

    newsSlot.innerHTML = ""
    const printingEntertainmentURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingEntertainmentURL(entertainmentAPI)
}

function healthFunction(currentState) {
    currentState.className = "nav-link active"
    general.className = "nav-link text-danger"
    buisness.className = "nav-link text-danger"
    entertainment.className = "nav-link text-danger"
    science.className = "nav-link text-danger"
    sports.className = "nav-link text-danger"
    technology.className = "nav-link text-danger"
    general.style.backgroundColor = "#f5f5f5"
    buisness.style.backgroundColor = "#f5f5f5"
    health.style.backgroundColor = "red"
    science.style.backgroundColor = "#f5f5f5"
    sports.style.backgroundColor = "#f5f5f5"
    technology.style.backgroundColor = "#f5f5f5"
    entertainment.style.backgroundColor = "#f5f5f5"

    newsSlot.innerHTML = ""
    const printingHealthURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingHealthURL(healthAPI)
}

function scienceFunction(currentState) {
    currentState.className = "nav-link active"
    general.className = "nav-link text-danger"
    buisness.className = "nav-link text-danger"
    entertainment.className = "nav-link text-danger"
    health.className = "nav-link text-danger"
    sports.className = "nav-link text-danger"
    technology.className = "nav-link text-danger"
    general.style.backgroundColor = "#f5f5f5"
    buisness.style.backgroundColor = "#f5f5f5"
    health.style.backgroundColor = "#f5f5f5"
    science.style.backgroundColor = "red"
    sports.style.backgroundColor = "#f5f5f5"
    technology.style.backgroundColor = "#f5f5f5"
    entertainment.style.backgroundColor = "#f5f5f5"

    newsSlot.innerHTML = ""

    const printingScienceURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingScienceURL(scienceAPI)
}

function sportsFunction(currentState) {
    currentState.className = "nav-link active"
    general.className = "nav-link text-danger"
    buisness.className = "nav-link text-danger"
    entertainment.className = "nav-link text-danger"
    health.className = "nav-link text-danger"
    science.className = "nav-link text-danger"
    technology.className = "nav-link text-danger"
    general.style.backgroundColor = "#f5f5f5"
    buisness.style.backgroundColor = "#f5f5f5"
    health.style.backgroundColor = "#f5f5f5"
    science.style.backgroundColor = "#f5f5f5"
    sports.style.backgroundColor = "red"
    technology.style.backgroundColor = "#f5f5f5"
    entertainment.style.backgroundColor = "#f5f5f5"

    newsSlot.innerHTML = ""

    const printingSportsURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingSportsURL(sportsAPI)
}

function technologyFunction(currentState) {
    currentState.className = "nav-link active"
    general.className = "nav-link text-danger"
    buisness.className = "nav-link text-danger"
    entertainment.className = "nav-link text-danger"
    health.className = "nav-link text-danger"
    science.className = "nav-link text-danger"
    sports.className = "nav-link text-danger"
    general.style.backgroundColor = "#f5f5f5"
    buisness.style.backgroundColor = "#f5f5f5"
    health.style.backgroundColor = "#f5f5f5"
    science.style.backgroundColor = "#f5f5f5"
    sports.style.backgroundColor = "#f5f5f5"
    technology.style.backgroundColor = "red"
    entertainment.style.backgroundColor = "#f5f5f5"

    newsSlot.innerHTML = ""

    const printingTechnologyURL = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        showNews(data)
    }
    printingTechnologyURL(technologyAPI)
}