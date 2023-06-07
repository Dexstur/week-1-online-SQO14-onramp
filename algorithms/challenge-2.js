function fizzBuzz(input){
    if(input % 5 == 0 && input % 3 == 0){
        return `fizzbuzz`
    }else if(input % 3 == 0){
        return `fizz`
    }else if (input % 5 == 0){
        return `buzz`
    }else{
        return input
    }
  
}
function fizzBuzz(input){
    switch  (input % 5 == 0 && input % 3 == 0){
    case 1: 
     return `fizzbuzz`
    break;   
    case 2:
        (input % 3 == 0)
        return `fizz`
    break;
    case 3:(input % 5 == 0)
        return `buzz`
        break;
    default:
        return input
    }
  
}


module.exports = fizzBuzz
