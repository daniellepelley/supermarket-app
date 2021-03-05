import { IState } from "../types/IState";

const create = (): IState => ({
  message: "Hello World",
  products: [
      {
          type : "FACE_MASK",
          title: "Face Mask",
          price: 2.5,
      },
      {
          type : "TOILET_ROLL",
          title: "Toilet Roll",
          price: .65,
      },
      {
          type : "HAND_SANITIZER",
          title: "Hand Sanitizer",
          price: 19.99,
          unitTitle: "l"  
      }
  ],
  basket: {
      items:[]
  }
});

export default create;
