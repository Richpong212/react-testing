import sum from "./sum"

test('add 6 plus 1 to be 7', () => {
    expect(sum(6, 1)).toBe(7)
})