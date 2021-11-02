const index = require('./index')

const FisherMan = index.FisherMan

test('if Fisherman name is Jenny', () => { 
    expect (index.Jenny.name).toBe('Jenny')
})

test('if Mark genger is male', () => { 
    expect (index.Mark.gender).toBe('Male')
})

describe('tests all the methods within the FisherMan class', () =>{
    
    test('if Jenny strength increases after traing', () => {
        index.Jenny.strength = 6
        index.Jenny.train()
        expect(index.Jenny.strength).toBe(7)
    })

    test('if mark experience increases after practise', () => {
        index.Mark.experience = 6
        index.Mark.practise()
        expect(index.Mark.experience).toBe(7)
    })

    test('if Jenny number of catches increase after fish time', () => {
        index.Jenny.numberOfCatches = 19
        index.Jenny.fishTime()
        expect(index.Jenny.numberOfCatches).toBe(20)
    })

    test('if Mark age increase after year passes', () => {
        index.Mark.age = 29
        index.Mark.year()
        expect(index.Mark.age).toBe(30)
    })
})