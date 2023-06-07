function calculateGrade(marks) {
    let totalMark = 0;
    let averageMark;
    let grade;
    for(i = 0; i < marks.length; i++){
        totalMark += marks[i];
    }
    averageMark = totalMark / marks.length;
    if(averageMark >= 90){
        grade = `A`;
    }else if(averageMark >= 80){
        grade = `B`
    }else if(averageMark >= 70){
        grade = `C`
    }else if(averageMark >= 60){
        grade = `D`
    }else if(averageMark >= 50){
        grade = `E`
    }else if(averageMark < 50){
        grade = `F`
    }
    return grade;
 }
  module.exports =calculateGrade
