
const index = require('./index')

const Fish = index.Fish


test('if Tunna name is Tunna', () => { 
    expect(index.Tunna.name).toBe('Tunna')
})

test('if Shark speed', () => { 
    expect(index.Shark.speed).toBe(8)
})


describe('tests all the methods within the Fish class', () => {
   
    test('if Tunna speed increases by 10 after training', () => {
        index.Tunna.speed = 5
        index.Tunna.train()
        expect(index.Tunna.speed).toBe(15)
    })

    test('if Tunna strength decreases by 10  after training', () => {
        index.Tunna.strength = 15
        index.Tunna.train()
        expect(index.Tunna.strength).toBe(5)
    })

    test('if Shark strength increases after sleeping', () => {
        index.Shark.strength = 15
        index.Shark.sleep()
        expect(index.Shark.strength).toBe(20)
    })

    test('if Shark age increases after year has passed', () => {
        index.Shark.age = 10
        index.Shark.year()
        expect(index.Shark.age).toBe(11)
    })
})
