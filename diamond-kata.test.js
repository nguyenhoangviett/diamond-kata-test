const { printDiamond } = require('./diamond-kata')

test('should print A diamond', () => {
    expect(printDiamond("A")).toBe("A")
})

test('should print B diamond', () => {
    expect(printDiamond("B")).toBe(" A\n" +
                                   "B B\n" +
                                   " A")
})

test('should print C diamond', () => {
    expect(printDiamond("C")).toBe("  A\n" +
                                   " B B\n" +
                                   "C   C\n" +
                                   " B B\n" +
                                   "  A")
}) 

test('should print D diamond', () => {
    expect(printDiamond("D")).toBe("   A\n" +
                                   "  B B\n" +
                                   " C   C\n" +
                                   "D     D\n" +
                                   " C   C\n" +
                                   "  B B\n" +
                                   "   A")
}) 