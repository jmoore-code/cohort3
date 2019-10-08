import {assertEquals} from "./daily";

// test("Me playing", () => {
//     console.log("Hellow World");
// });

test('Check if parm are equal', () => {
    expect(assertEquals("a","b")).toBe(false);
    expect(assertEquals("a","a")).toBe(true);
    expect(assertEquals(1,2)).toBe(false);
    expect(assertEquals(2,2)).toBe(true);
    expect(assertEquals("2",2)).toBe(false);
    expect(assertEquals("This value","This value")).toBe(true);
})

