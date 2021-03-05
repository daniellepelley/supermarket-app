import staticNames from "../../store/staticNames";
import { IBasketProduct } from "../../store/types/IBasketProduct";
import { IProduct } from "../../store/types/IProduct";
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
];

  const products: IProduct[] = [
    {
      code: staticNames.FACE_MASK,
      title: "Face Mask",
      price: 1.2,
    },
    {
      code: staticNames.TOILET_ROLL,
      title: "Toilet Roll",
      price: 0.65,
    },
  ];

test("maps basket items", () => {
  const list = mapBasketItems(basketProducts, products);

  expect(list.length).toEqual(7);
  expect(list[0].title).toEqual(products[0].title);
  expect(list[0].productCode).toEqual(products[0].code);
  expect(list[4].title).toEqual(products[1].title);
  expect(list[4].productCode).toEqual(products[1].code);
});

test("maps sub total", () => {
  const subTotal = mapSubTotal(basketProducts, products);

  expect(subTotal).toEqual(6.75);
});