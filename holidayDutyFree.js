<<<<<<< HEAD
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    discount = (discount/100);
    console.log(normPrice);
    console.log(discount.toFixed(2));
    console.log(hol);


    withDiscount = (normPrice * discount).toFixed(2)
    
    console.log(Math.floor(hol / withDiscount));
    return Math.floor(hol / withDiscount);
}

dutyFree(17, 10, 500)// 294
=======
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    discount = (discount/100);
    console.log(normPrice);
    console.log(discount.toFixed(2));
    console.log(hol);


    withDiscount = (normPrice * discount).toFixed(2)
    
    console.log(Math.floor(hol / withDiscount));
    return Math.floor(hol / withDiscount);
}

dutyFree(17, 10, 500)// 294
>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
// dutyFree(24, 35, 3000)// 357