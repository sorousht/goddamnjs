/*
    Hey JS warrior, welcome to the second task!
    
    It has been said that one of the most basic exercises of Japanese warriors was playing with arrays!
    Array is like fire. You need to master it, otherwise it burns you! Yohahaha 
*/
function compareNumbers(a, b) {
    return a - b;
}

// 78 - 56 = 22     =>   56
// 56 - 232 = -176  =>   56
// 232 - 12 = 220   =>   12

const getLowestItem = (items) => {
    return items.sort(compareNumbers)[0]
};

module.exports = getLowestItem;