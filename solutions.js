"use strict";

(function (){

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//1 isTrue (complete)

function isTrue ( a ){
    if (a == true){
        return true;
    }
    else{
        return false;
    }
}

//2 isFalse (complete)

function isFalse( a ){
    if (a == false) {
        return true;
    }
    else{
        return false;
    }
}

//3 not (complete)

function not( a ){
   return !a;
}

//4 addOne (complete)

function addOne( input ) {
    return Number(input) + 1;

}

//5 isEven (complete)

function isEven(number) {
    if ( number === false){
        return false;
    }
    else if( number % 2 ==0){
        return true;
    }
    else{
        return false;
    }

}


//6 isIdentical (complete)

function isIdentical(factor_1 , factor_2) {
    return factor_1 === factor_2;
}


//7 isEqual (complete)

function isEqual(factor_1 ,factor_2 ){
    if( factor_1 == factor_2){
        return true;
    }else{
         return false;
    }
}

//8 or (complete)

function or( factor_1 , factor_2 ){
    return factor_1 || factor_2;
}

//9 and (complete)

function and( factor_1 , factor_2){
    return factor_1 && factor_2;
}

//10 concat (complete)

function concat ( factor_1 , factor_2 ) {
    return (factor_1.toString()) + (factor_2.toString());

}
})();