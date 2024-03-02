const appOperations = require('./appOperations');

test('multiplication property of zero', () =>{
    expect(appOperations(5,0)).toBe(0);
    //expect(appOperations.multiply(5,0)).toBe(0);
});

test('addition works properly', ()=>{
    expect(appOperations.addition(5,6)).toBe(11);
});