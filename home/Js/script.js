document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-arrow').addEventListener('click', () => {
        console.log('pressed')
        let estado = document.querySelector(".menu-dropdown").style.display;
        if (estado == "none"){
            document.querySelector(".menu-dropdown").style.display = "flex";
        }else{
            document.querySelector(".menu-dropdown").style.display = "none";            
        };
        
    
    })
    document.querySelector('.menu-dropdown').addEventListener('click', () => {
        document.querySelector(".menu-dropdown").style.display = "none";

})
})


// menu themes

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.button-night').addEventListener('click', () => {
        console.log('pressed')
        const body = document.querySelector('body')
        body.classList.add('dark')
        body.classList.remove('light')
    })

    document.querySelector(".button-day").addEventListener("click",() => {
        console.log("pressed")
        const body = document.querySelector('body')
        body.classList.add('light')
        body.classList.remove('dark')
        
    })
})


//API SEARCH

document.addEventListener('DOMContentLoaded', () => {

   let searchForm =  document.getElementById('search-bar')
   let searchInput = document.getElementById('miBusqueda')

   searchForm.addEventListener ('submit' , function (e) {
       console.log ('funca')
       e.preventDefault()
       let q = searchInput.value
       search (q)

   })
   
})
       
    





function search (q) {
    
    let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
    let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
    
    fetch(path).then(function (res){
        return res.json()
    }).then (function (json){
        console.log(json.data[0].images.fixed_width.url)
    
        let resultsEl = document.getElementById('grid-contenedor')
        let resultHTML = ''
        json.data.forEach(function (obj){
            console.log(obj.images.fixed_width.url)
            let url = obj.images.fixed_width.url
            let title = obj.title
            resultHTML += `<img src= ${url} alt=${title}>`
    
    
        }) 
        resultsEl.innerHTML = resultHTML
    }).catch(function (err){
        console.log(err.message)
    })
    

} 

// TRENDING SECTION GOT








function trendings () {

let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
let q = 'GOT'
let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`





fetch(path).then(function (res){
    return res.json()
}).then (function (json){
    console.log(json.data[0].images.fixed_width.url)

    
    let resultHTML = ''
    
    let url = json.data[0].images.fixed_width.url
    let title = json.data[0].title

    


    document.getElementById('GOT').innerHTML =  `<img src= ${url} alt=${title}>`
    }) 

.catch(function (err){
    console.log(err.message)
})

}

trendings ()

//VER MAS GOT

document.addEventListener('DOMContentLoaded', () => {

    let vermas =  document.getElementById('vermas-GOT')
    
    vermas.addEventListener ('click' , function () {
        console.log ('funca')

        let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
        let q = 'GOT'
        let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
        
        fetch(path).then(function (res){
            return res.json()
        }).then (function (json){
            console.log(json.data[0].images.fixed_width.url)
        
            let resultsEl = document.getElementById('grid-contenedor')
            let resultHTML = ''
            json.data.forEach(function (obj){
                console.log(obj.images.fixed_width.url)
                let url = obj.images.fixed_width.url
                let title = obj.title
                resultHTML += `<img src= ${url} alt=${title}>`
        
        
            }) 
            resultsEl.innerHTML = resultHTML
        }).catch(function (err){
            console.log(err.message)
        })
       
 
    })
    
 })


 // TRENDING SECTION MARVEL

function trendingsmarvel () {

    let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
    let q = 'marvel'
    let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
    
    
    fetch(path).then(function (res){
        return res.json()
    }).then (function (json){
        console.log(json.data[0].images.fixed_width.url)
    
        
        let resultHTML = ''
        let url = json.data[0].images.fixed_width.url
        let title = json.data[0].title
        
    
    
        document.getElementById('marvel').innerHTML =  `<img src= ${url} alt=${title}>`
        }) 
    
    .catch(function (err){
        console.log(err.message)
    })
    
    }
    
    trendingsmarvel ()
    
    //VER MAS MARVEL
    
    document.addEventListener('DOMContentLoaded', () => {
    
        let vermas =  document.getElementById('vermas-marvel')
        
        vermas.addEventListener ('click' , function () {
            console.log ('funca')
    
            let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
            let q = 'marvel'
            let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
            
            fetch(path).then(function (res){
                return res.json()
            }).then (function (json){
                console.log(json.data[0].images.fixed_width.url)
            
                let resultsEl = document.getElementById('grid-contenedor')
                let resultHTML = ''
                json.data.forEach(function (obj){
                    console.log(obj.images.fixed_width.url)
                    let url = obj.images.fixed_width.url
                    let title = obj.title
                    resultHTML += `<img src= ${url} alt=${title}>`
            
            
                }) 
                resultsEl.innerHTML = resultHTML
            }).catch(function (err){
                console.log(err.message)
            })
           
     
        })

    })
        
    // TRENDING SECTION HARRYPOTTER

function trendingsharrypotter () {

    let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
    let q = 'harrypotter'
    let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
    
    
    fetch(path).then(function (res){
        return res.json()
    }).then (function (json){
        console.log(json.data[0].images.fixed_width.url)
    
        
        let resultHTML = ''
        let url = json.data[1].images.fixed_width.url
        let title = json.data[1].title
        
    
    
        document.getElementById('harrypotter').innerHTML =  `<img src= ${url} alt=${title}>`
        }) 
    
    .catch(function (err){
        console.log(err.message)
    })
    
    }
    
    trendingsharrypotter ()

    //VER MAS MARVEL
    
    document.addEventListener('DOMContentLoaded', () => {
    
        let vermas =  document.getElementById('vermas-harry')
        
        vermas.addEventListener ('click' , function () {
            console.log ('funca')
    
            let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
            let q = 'harrypotter'
            let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
            
            fetch(path).then(function (res){
                return res.json()
            }).then (function (json){
                console.log(json.data[0].images.fixed_width.url)
            
                let resultsEl = document.getElementById('grid-contenedor')
                let resultHTML = ''
                json.data.forEach(function (obj){
                    console.log(obj.images.fixed_width.url)
                    let url = obj.images.fixed_width.url
                    let title = obj.title
                    resultHTML += `<img src= ${url} alt=${title}>`
            
            
                }) 
                resultsEl.innerHTML = resultHTML
            }).catch(function (err){
                console.log(err.message)
            })
           
     
        })

    })
     
// TRENDING SECTION HARRYPOTTER

function trendingsstarwars () {

    let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
    let q = 'starwars'
    let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
    
    
    fetch(path).then(function (res){
        return res.json()
    }).then (function (json){
        console.log(json.data[0].images.fixed_width.url)
    
        
        let resultHTML = ''
        let url = json.data[1].images.fixed_width.url
        let title = json.data[1].title
        
    
    
        document.getElementById('starwars').innerHTML =  `<img src= ${url} alt=${title}>`
        }) 
    
    .catch(function (err){
        console.log(err.message)
    })
    
    }
    
    trendingsstarwars ()

    //VER MAS MARVEL
    
    document.addEventListener('DOMContentLoaded', () => {
    
        let vermas =  document.getElementById('vermas-starwars')
        
        vermas.addEventListener ('click' , function () {
            console.log ('funca')
    
            let apiKey = 'QD42GT9GNNLsKEo1852Enm3sXv26r9NT'
            let q = 'starwars'
            let path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`
            
            fetch(path).then(function (res){
                return res.json()
            }).then (function (json){
                console.log(json.data[0].images.fixed_width.url)
            
                let resultsEl = document.getElementById('grid-contenedor')
                let resultHTML = ''
                json.data.forEach(function (obj){
                    console.log(obj.images.fixed_width.url)
                    let url = obj.images.fixed_width.url
                    let title = obj.title
                    resultHTML += `<img src= ${url} alt=${title}>`
            
            
                }) 
                resultsEl.innerHTML = resultHTML
            }).catch(function (err){
                console.log(err.message)
            })
           
     
        })

    })

    //MENU BUSQUEDAS SUGERIDAS




   
  

    document.addEventListener('DOMContentLoaded', () => {

        let busqueda = document.getElementById('miBusqueda')
        busqueda.addEventListener('click', () => {
            console.log('pressed')
            
            

            
        })
    })




    


















