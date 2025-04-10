/*
try {
console.log('hello')
} catch(e) {
console.log('caught')
}
*/

var arr = [10, 11, 12, 13]
for(ar of arr)
    console.log(ar)

console.log("--------------")
for(ar in arr)
    console.log(ar)

var element = {
  ele: 1,
  ele2: 2,
  ele3: 3,
  ele4: 4
}

console.log("--------------")

for(i of Object.keys(element))
  console.log(i)

console.log("--------------")
for(i in element)
  console.log(i + ": " + element[i])

const animal = {
  canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

for(const i of Object.keys(bird))
  console.log(i + ": " + bird[i])
