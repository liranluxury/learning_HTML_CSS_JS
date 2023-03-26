function complexHello(textHi, userName, age) {
    console.log(textHi + ' My name is '+ userName + '. I am '+ age + ' years old.');
}
// complexHello("Hi! My name is Liran. I'm 50 years old.");
complexHello('Hi!', 'Liran', 50);
complexHello('Hi!', 'John', 10);
complexHello('Hi!', 'Iren', 46);
complexHello('Hi!', 'Ars', 29);

function square(number) {
    return number * number;
}
let y = square(522);
console.log(y);

function isSquareBig(side) {
    const squareArea = square(side);
    if (squareArea > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(isSquareBig(15));


function totalArea(width, heigth) {
    console.log(width * heigth);
}
totalArea(12, 43);

// function animalVoice(animal, animalName){
//     switch(animal){
//         case "dog":
//             return animalName + " burks.";
//             case "cat":
//                 return animalName + " meows.";
//                 case "pig":
//                     return animalName + " grunts.";
//                     default :
//                     return animalName + " makes some sounds.";
//     }
// }
// console.log(animalVoice("cat", "Richard"));

const animalVoice = function(animal, animalName) {
    switch(animal){
        case "dog":
            return animalName + " burks.";
            case "cat":
                return animalName + " meows.";
                case "pig":
                    return animalName + " grunts.";
                    default :
                    return animalName + " makes some sounds.";
    } 
}
console.log(animalVoice("cat", "Richard"));