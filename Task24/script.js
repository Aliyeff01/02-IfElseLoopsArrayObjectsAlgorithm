const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
  ];
  

  let filteredTechs = [];

  for (let tech of webTechs) {
    if (tech.length > 4) {
      filteredTechs.push(tech); 
    }
  }
  
  console.log(filteredTechs); 
  