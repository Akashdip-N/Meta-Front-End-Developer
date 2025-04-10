// Task 1
function logDairy() {
  var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
  for(ele of dairy)
    console.log(ele)
}

// Task 2
const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for(const i of Object.keys(bird))
    console.log(i + ": " + bird[i])
}

// Task 3
function animalCan(){
  for(const key in bird)
    console.log(key + ": " + bird[key])
}


logDairy()
birdCan()
animalCan()
