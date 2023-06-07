function filterList(arr) {
    let filteredArray = [];
    for(i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            filteredArray.push(arr[i]);
        };
    };
    return filteredArray;
 }


 console.log(filterList([1,2,3,5,'4', 6, '8', 'james']));
  module.exports =filterList