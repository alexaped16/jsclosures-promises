// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

function createAdder(x){
    var num = x;

    function addNum(x){
        return x += num;  
    };

    return addNum;
}

const addEight = createAdder(8);
console.log(addEight(10)); // 18
console.log(addEight(17)); // 25
console.log(addEight(50)); // 58
console.log(addEight(100)); // 108
console.log(addEight(92)); // 100



const addThree = createAdder(3);
console.log(addThree(10)); // 13
console.log(addThree(17)); // 20
console.log(addThree(50)); // 53
console.log(addThree(100)); // 103
console.log(addThree(92)); // 95



// Exercise 2 - Promises 
// Using either .then().catch() or Async/Await, create an asynchronous function that accepts 
// a movie title and then either displays the movie information or logs an error.

class Movie {
    constructor(movieName, movieID){
        this.movieID = movieID
        this.movieName = movieName
        
    }
}

function getMovieInfo(){
        if (movieName.length > 5){
            let movieInfo = {
                title: movieName,
                director: 'Christopher 
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    

const verifyMovie = async function(){
    try{
        const movieInfo = await Movie.getMovieInfo()
        console.log(movieInfo);
    } catch(err) {
        console.log(reject)
    }
}

const m1 = new Movie('Lolita');
console.log(m1.movieName);