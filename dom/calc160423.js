'use strict';


const calcAvarege = (res1, res2, res3)=> (res1 + res2 + res3)/3;
 let crazyKats = calcAvarege (41, 23, 71);
 let funnyDucks = calcAvarege ( 65, 154, 49);



function bigResult (crazyKats, funnyDucks){
    if (crazyKats >= funnyDucks*2){
        console.log(`Congratulation! CrazyKatz won!${crazyKats}`);
    } else if (funnyDucks >= crazyKats*2){
        console.log(`Congratulation! FunnyDucks won!${funnyDucks}`);
    } else {
        console.log("Congratulation! Zero draw!")
    }
}

bigResult(crazyKats,funnyDucks);

