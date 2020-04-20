/*
    We need to create an application that generates the initials of a full name
    Here are some examples:
    - Will Smith -> W.S
    - Natalie Portman -> N.P
*/

const getFirstLetter = (element) => {
    return element.slice(0,1)
}
const getInitials = (fullName) => {
    return fullName.split(' ').map(getFirstLetter).join('.');
};

module.exports = getInitials;