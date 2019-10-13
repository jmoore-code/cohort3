import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test("Does the subtract function work?", () => {
    expect(functions.subtract(3,2)).toBe(1);
    expect(functions.subtract(1,1)).toBe(0);
    expect(functions.subtract(-1,1)).toBe(-2);
    expect(functions.subtract(-1,-1)).toBe(0);
});

test("Does the multiply function work?", () => {
    expect(functions.multiply(2,2)).toBe(4);
    expect(functions.multiply(1,0)).toBe(0);
    expect(functions.multiply(-2,2)).toBe(-4);
    expect(functions.multiply(100,2)).toBe(200);
});

test("Does the divide function work?", () => {
    expect(functions.divide(4,2)).toBe(2);
    expect(functions.divide(1,0)).toBe(Infinity);
    expect(functions.divide(-4,2)).toBe(-2);
    expect(functions.divide(20,100)).toBe(0.2);
});

test("Does the tax calculator work?", () => {
    expect(functions.taxCalculator(2)).toBe(.30);
    expect(functions.taxCalculator(47630)).toBe(7144.5);
    expect(functions.taxCalculator(50000)).toBe(7630.35);
    expect(functions.taxCalculator(95259)).toBe(16908.445);
    expect(functions.taxCalculator(100000)).toBe(18141.105);
    expect(functions.taxCalculator(147667)).toBe(30534.525);
    expect(functions.taxCalculator(150000)).toBe(31211.095);
    expect(functions.taxCalculator(210371)).toBe(48718.685);
    expect(functions.taxCalculator(250000)).toBe(61796.255);
});