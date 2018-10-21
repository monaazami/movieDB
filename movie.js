console.log("connected");
var movies=[
    {name:"Lord of the ring", seen: true , rating:5},
    {name:"Black mirror", seen: true , rating:2.5},
    {name:"Raign", seen: false , rating:4},
    {name:"Samantha", seen: true , rating:3.5},
    {name:"Royal family", seen: false , rating:5},
];


movies.forEach(function(movie){
    if(movie.seen === true){
        console.log("You have seen '" + movie.name + "', its rate is " + movie.rating +" .");
    } else console.log("You have not seen '" + movie.name + "', its rate is " + movie.rating +" .");
    
})

