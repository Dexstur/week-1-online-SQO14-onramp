function countTruthy(arr) {
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(Boolean(arr[i]) == true){
            count++
        }
    }
    return count
}

module.exports = countTruthy