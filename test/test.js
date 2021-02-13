let s = document.querySelector(".score");
console.log(s)
describe("Score incrementing", () => {
    beforeEach(() => {
        score = score + 5;
    });
    it("should increase by 1", () => {
        expect(score).toBe(5);
    })
})
