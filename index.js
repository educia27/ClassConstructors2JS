//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let total = 0
    for (let i = 0; i < this.scores.length; i++) {
        total+= this.scores[i];
    }
    let average = total / this.scores.length
    return Math.round(average*10)/10;
    
  }

  status() {
   if (this.average() >= 90) {
    return "Accepted";
   } else if (this.average() > 80) {
     return "Reserve";
   } else if (this.average() > 70) {
     return "Probationary";
   } else {
     return "Rejected";
   }

  }
  
}

let object1 = new CrewCandidate ("Bubba Bear", "135KG" ,[88,85,90]);

let object2 = new CrewCandidate ("Merry Maltese", "1.5KG",[93,88,97]);

let object3 = new CrewCandidate ("Glad Gator", "225KG",[75,78,62]);

object1.addScore(83);


console.log(object1.average());

object1.status();

function message(candidate) {
  return (`${candidate.name} earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}`);
}
console.log(message(object1));
console.log(message(object2));
//console.log(message(object3));


for (let i = 0; i < 6; i++) {
  object3.addScore(100);
}
console.log(message(object3));

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.