var animal = [
    { name: 'Cat', numberOfLegs: 4 },
    { name: 'Snake', numberOfLegs: 0 },
    { name: 'Dog', numberOfLegs: 4 },
    { name: 'Pig', numberOfLegs: 4 },
    { name: 'Human', numberOfLegs: 2 },
    { name: 'Bird', numberOfLegs: 2 },
];

function sortAnimal(animal) {
    let result = animal ? animal.sort((a, b) => a.numberOfLegs - b.numberOfLegs || (a.name < b.name ? -1 : 1)) : null;
    return result;
}

console.log(sortAnimal(animal)); // [{ name: 'Snake', numberOfLegs: 0 }, { name: 'Bird', numberOfLegs: 2 }, { name: 'Human', numberOfLegs: 2 }, { name: 'Cat', numberOfLegs: 4 }, { name: 'Dog', numberOfLegs: 4 }, { name: 'Pig', numberOfLegs: 4 }]
