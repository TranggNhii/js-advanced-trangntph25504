const dogs = [
    {
        weight: 22,curFood:250,owners:['Alice','Bob']
    },
    {
        weight: 22,curFood:250,owners:['Alice','Bob']
    },
    {
        weight: 22,curFood:250,owners:['Alice','Bob']
    },
    {
        weight: 22,curFood:250,owners:['Alice','Bob']
    },
];
//1.
dogs.forEach(dog =>(dog,recFood = Math.trunc(dog.weight ** 0.75 * 28)));
//2.
const dogSarh = dogs.find(dog =>dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log("Sarahs dog is eating too  ${dogSarah.curFood > dogSarh.recFood ? 'much' : 'little'}");

//3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog =>dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittel = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog =>dog.owners);
//4.
console.log("${ownersEatTooMuch.join('and')} dogs eat too much !");
console.log("${ownersEatTooLittel.join('and')} dogs eat too Little !");
//5.
console.log(dogs.some(dog =>dog.curFood === dog.recFood));
//6.
const checkEatingOKay = dog => dog.curFood > dog.recFood * 0.9 && curFood < dog.recFood * 11;
console.log(dogs.some(checkEatingOKay));
//7.
console.log(dogs.filter(checkEatingOKay));
//8.
const dogsSorted = dogs.slice().sort((a,b) =>a.recFood - b.recFood);
console.log(dogsSorted);