//Arrow functions, how the functions
//looked before and how they look now as arrow functions


//before
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  //after
  getRandomNumber=()=>{
    return Math.floor(Math.random() * hex.length);
  }



  //before
  hello = function(){
      return"Hello world !!!";
  }

  //with arrow function
  hello =()=>{
      return "Hello world";
  }



  //before
  const years = [1970, 1980, 1990, 2010];
  const yearsAgoES5 = years.map(function(year) {
      return 2020 - year;
  })

  console.log(yearsAgoES5);


  //with arrow function
const yearsAgoES5 = years.map((year, index) => {
    return 2020 - year
});
console.log(yearsAgoES5);