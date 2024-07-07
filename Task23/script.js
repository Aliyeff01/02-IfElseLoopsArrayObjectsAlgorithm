const students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
  ];
  
  let averageScores = [];
    for (let student of students) {
    let sum = 0;
    for (let score of student.scores) {
      sum += score;
    }
    
    let average = sum / student.scores.length;
    
    averageScores.push(average);
  }
  
  console.log(averageScores);
  
  
  