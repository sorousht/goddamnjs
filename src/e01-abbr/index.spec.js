const getInitials = require('./');
describe('generate the initials of a full name', () => {
    it('should return empty string if the the given name is empty', () => {
        expect(getInitials("")).toBe("");
    });
    it('should return the initial letter of first name if the full name is not provided', () => {
        expect(getInitials("Jim")).toBe("J.");
    });
    it('should return the initials of a full name', () => {
        expect(getInitials("Jim Carry")).toBe("J.C");
    });
    it('should also handle the a middle name', () => {
        expect(getInitials("Robert De Niro")).toBe("R.D.N");
    });
})