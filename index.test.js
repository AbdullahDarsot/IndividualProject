
const index = require('./index')

const Fish = index.Fish
const Ocean = index.Ocean
const FisherMan = index.FisherMan


test('if Tunna name is Tunna', () => { // test the age is above a certain number
    expect(index.Tunna.name).toBe('Tunna')
})

test('if Ocean name is Pacific', () => { // test the age is above a certain number
    expect(index.Pacific.name).toBe('Pacific')
})

test('if Fisherman name is Jenny', () => { // test the age is above a certain number
    expect(index.Jenny.name).toBe('Jenny')
})


test('if Jenny strength increases after training', () => {
    index.Jenny.strength = 6
    index.Jenny.gym()
    expect(index.Jenny.speed).toBe(7)
})
