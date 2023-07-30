// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bowl`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);


// function writeCards (newArrays, eventName) {
//     let cards = [];
//     for (i = 0; i < newArrays.length; i++) {
//         cards.push(`Thank you, ${newArrays[i]}, for the ${eventName} present!`);
//     }
//     return cards;
// }

// const newArrays = ["Mary", "Harry", "Samani", "Nachinab"]; 
// const eventName = "Christmas";

// const messageCards = writeCards(["Mary", "Harry", "Samani", "Nachinab"], "Christmas");
// console.log(messageCards);

// //while loop
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);


function countDown(foo) {
if (foo <= 0){
    console.log(foo);
    return;
}

while (foo >= 0) {
    console.log(foo);
    foo--;
}
}

countDown(10);