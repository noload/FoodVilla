import { sum } from "../sum";

sum;
test("Check Sum of 2 positive number", () => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(-5, 3)).toBe(-2);
});
