it('Case1', () => {
    expect('ABC').toBe('ABC');
})

it('Case2 - fail', () => {
    expect('ABC').toBe(true);
})

it('Case3', () => {
    expect(true).toBe(true);
})

it('Case4 - fail'), () => {
    fail();
}