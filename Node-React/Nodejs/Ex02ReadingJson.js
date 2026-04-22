//U can refer the external js or json files using require() method. 
const data = require('./movies.json');//Movies.json is an external file that contain JSON data. We are referring that file using require() method and storing the data in a variable called data.
for(const movie of data){
    console.log(`${movie.Title} directed by ${movie.Director} and has rating ${movie.Rating}`)
}