const index = require('./index')
const Ocean = index.Ocean


test('if Ocean name is Pacific', () => { 
    expect(index.Pacific.name).toBe('Pacific')
})

test('if Ocean name is Antartic', () => { 
    expect(index.Antartic.name).toBe('Antartic')
})

test('if Pacific is blue', () => { 
    expect(index.Pacific.color).toBe('Blue')
})


describe('tests all the methods within the Ocean class', () => {
   
    test('if pacific danger level increases after danger is run', () => {
        index.Pacific.DangerLevel = 6
        index.Pacific.danger()
        expect(index.Pacific.DangerLevel).toBe(16)
    })

    test('if pacific color chnages after weather changes', () => {
        index.Pacific.color = 'blue'
        index.Pacific.weather()
        expect(index.Pacific.color).toBe('green')
    })

    test('if fish level increases after spawn', () => {
        index.Antartic.FishLevel = 5
        index.Antartic.spwan()
        expect(index.Antartic.FishLevel).toBe(10)
    })
})