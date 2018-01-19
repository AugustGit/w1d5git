var listStore = require("./listStore")

var data = [4, 6, 8, 2, 32]

function addData(input){
  for(i = 0; i < input.length; i++){

listStore.addToList(input[i])
console.log(listStore.sortList())
  }
}

addData(data)
