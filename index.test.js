const index = require('../index')

const Fish = index.Fish


test('if Tunna speed is 9', () => { // test the age is above a certain number
    expect(index.Tunna.speed).toBe(9)
})