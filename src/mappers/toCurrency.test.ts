import toCurrency from "./toCurrency";

test("converts a number to a currency string", () => {
  const currency = toCurrency(2);
  expect(currency).toEqual("2.00");
});

test("converts a number to a currency string", () => {
  const currency = toCurrency(20);
  expect(currency).toEqual("20.00");
});
