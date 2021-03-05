import toCurrency from "./toCurrency";

test("converts a number to a currnecy string", () => {
  const currency = toCurrency(2);
  expect(currency).toEqual("2.00");
});

