import { IState } from "../types/IState";
import staticNames from "../staticNames";

const create = (): IState => ({
  products: [
    {
      code: staticNames.FACE_MASK,
      title: "Face Mask",
      price: 2.5,
    },
    {
      code: staticNames.TOILET_ROLL,
      title: "Toilet Roll",
      price: 0.65,
    },
    {
      code: staticNames.HAND_SANITIZER,
      title: "Hand Sanitizer",
      price: 19.99,
      unitTitle: "l",
    },
  ],
  discounts: [
    {
      productCode: staticNames.FACE_MASK,
      discount: 1,
      threshold: 2,
      title: "Two Face Masks for £4",
    },
    {
      productCode: staticNames.TOILET_ROLL,
      discount: 0.65,
      threshold: 6,
      title: "Six rolls of toilet paper for the price of five",
    },
  ],
  basket: {
    items: [],
    discounts: []
  },
});

export default create;
