import staticNames from "../store/staticNames";
import { IAppliedDiscount } from "../store/types/IAppliedDiscount";
import { IBasketProduct } from "../store/types/IBasketProduct";
import { IProduct } from "../store/types/IProduct";
import { mapBasketItems, mapSubTotal } from "./basketItemsMapper";

const basketProducts: IBasketProduct[] = [
  {
    productCode: staticNames.FACE_MASK,
    quantity: 4,
  },
  {
    productCode: staticNames.TOILET_ROLL,
    quantity: 3,
  },
  {
    productCode: staticNames.HAND_SANITIZER,
    quantity: 0.175,
  },
];

const products: IProduct[] = [
  {
    code: staticNames.FACE_MASK,
    title: "Face Mask",
    price: 1.2,
    unitsToAdd: 1
  },
  {
    code: staticNames.TOILET_ROLL,
    title: "Toilet Roll",
    price: 0.65,
    unitsToAdd: 1
  },
  {
    code: staticNames.HAND_SANITIZER,
    title: "Hand Sanitizer",
    price: 10.00,
    unitsToAdd: 0.175,
    unitTitle: "l"
  },
];

const discounts: IAppliedDiscount[] = [
  {
    title: "Face Mask",
    discount: 1,
  },
  {
    title: "Toilet Roll",
    discount: 0.65,
  },
];

test("maps basket items", () => {
  const list = mapBasketItems(basketProducts, products);

  expect(list.length).toEqual(8);
  expect(list[0].title).toEqual(products[0].title);
  expect(list[0].productCode).toEqual(products[0].code);
  expect(list[4].title).toEqual(products[1].title);
  expect(list[4].productCode).toEqual(products[1].code);
  expect(list[7].title).toEqual(products[2].title);
  expect(list[7].productCode).toEqual(products[2].code);
  expect(list[7].price).toEqual(1.75);
  expect(list[7].unitsBreakdown).toEqual("0.175 l @ £10.00/l");
});

test("maps sub total", () => {
  const subTotal = mapSubTotal(basketProducts, products);
  expect(subTotal).toEqual(8.5);
});

test("maps total savings", () => {
  const value = discounts
    .map((x) => x.discount)
    .reduce((discount: number, total: number) => total + discount, 0);
});
