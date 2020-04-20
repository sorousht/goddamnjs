/*
    We need to create an application that generates the initials of a full name
    Here are some examples:
    - Will Smith -> W.S
    - Natalie Portman -> N.P
*/
const getInitials = (fullName) => {
    let result = [];
    let initials
    let final
    if (fullName === '') {
        return ''
    } else {
        const arrayOfStrings = fullName.split(' ')
        if (arrayOfStrings.length === 1) {
            final = arrayOfStrings[0].slice(0, 1) + '.'
        } else {
            arrayOfStrings.forEach(element => {
                initials = element.slice(0, 1)
                result.push(initials)
            })
            final = result.join('.')

        }
        console.log(final)
        return final

    }


// if(fullName === '') {
//     return '';
// } else {

//     let firstNameInitial = fullName.slice(0,1);
//     let lastNameInitial = '';

//     for (let i=0 ;i <= fullName.length; i++) {
        
//         let char = fullName[i];
//         if (char === ' ') {
            
//            lastNameInitial = fullName.slice(i+1,i+2)
//         }
//     }
//     console.log(firstNameInitial + '.' + lastNameInitial)
//     return firstNameInitial + '.' + lastNameInitial;
// }


};

// getInitials("Jim Carrey derr");

module.exports = getInitials;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// node src/e01-abbr/index.js

/*
    git remote -v
    git status
 */