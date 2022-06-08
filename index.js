// Code your solutions in this file
const writeCards = (name) => {
    let namesArr = [];
    for(let i = 0; i < name.length; i++) {
       namesArr.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return namesArr;
 }
 const countDown = (num) => {
    for(let i = num; i >= 0; i--) {
       console.log(i);
    }
 }
 