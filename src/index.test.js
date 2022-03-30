const zip2state = require('./index')

test('properly returns a state for a partial zip', () => {
    expect(zip2state('44')).toBe('OH')
})

test('properly returns a state for a full zip', () => {
    expect(zip2state('99102')).toBe('WA')
})

test('properly returns a state for a full zip', () => {
    expect(zip2state('00000')).toBe('')
})