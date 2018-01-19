//var list = [6, 3, 5, 2]


/*list.sort(function(a,b){ //Array elements now sorted
    return ( a - b )
});
*/

 var list = [6, 3, 5, 2,]

module.exports = {
//addedList: var addedList = addToList(),
addToList: function(input){
 list.push(input);
 console.log(list)
 },

sortList: function () {
    list.sort(function(a,b){ //Array elements now sorted
    return ( a - b )
     })
    return list
   }
}

    //list.sort(function(a,b){ //Array elements now sorted
    //return ( a - b )
    // })


/*module.exports = {
 sortList: list.sort(function(a,b){ //Array elements now sorted
    return ( a - b )
 })
}


function addToList(){
  return function(input){
     list.push(input)
 }
}

*/

/*
LIST SORT
list.sort(function(a,b){ //Array elements now sorted
    return ( a - b )
});

LIST ADD
function addToList(input){
  return list.push(input)
}

EXPORTING MODULE
module.exports = {
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  }
};

*/