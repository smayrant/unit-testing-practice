const functions = require('./functions');

// toBe matcher
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

// not.toBe matcher
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

// toBeNull matcher
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy matcher
test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

// toBe fails because of its strict matching and objects being referenced in different memory locations. toEqual should be used instead
test('User should be a Sheldrick Mayrant object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Sheldrick',
        lastName: 'Mayrant'
    });
})

test('Should be under 1600', () => {
    const load1 = 820;
    const load2 = 643;
    expect(load1 + load2).toBeLessThan(1600)
})

// Regex using not.toMatch
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})