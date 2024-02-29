const appOperations = require('./appOperations');

test('multiplication property of zero', () =>{
    //expect(appOperations.multiply(5,0)).toBe(0);
    expect(appOperations(5,0)).toBe(0);
});
