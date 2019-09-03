const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA === nameB
const condision=nameA<nameB  
const othCondision=nameB<nameA

console.log(nameA)
console.log(nameB)
console.log(nameCompared)
console.log(condision)
console.log(othCondision)


const ageA = 18
const ageB = 25

if (ageA > ageB) {
  console.log('A older')
} else if (ageA < ageB) {
  console.log('B older')
} else {
  console.log('no one')
}


const personA = {
    name: 'Alpha',
    age: 20
  }
  
  const personB = {
    name: 'Betty',
    age: 30
  }
  
  switch (personA.age > personB.age) {
    case true:
      console.log('a tua')
      break
  
    case false:
      console.log('b tua')
      break
  
    default:
      console.log('gak tau')
  }
  