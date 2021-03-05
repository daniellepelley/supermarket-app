import { IBasketItem } from "../../store/types/IBasketItem";
import { IBasketProduct } from "../../store/types/IBasketProduct";
import { IProduct } from "../../store/types/IProduct";

const map = (items: IBasketProduct[], products: IProduct[]): IBasketItem[] => {
  return items
    .map((item) => {
      const product = products.filter(
        (product) => product.code === item.productCode
      )[0];
      return new Array(item.quantity).fill("").map((_, i) => {
        return {
          id: `${product.code}-${i}`,
          title: product.title,
          price: `${product.price}`,
          productCode: product.code,
        };
      });
    })
    .reduce((a, b) => {
      return a.concat(b);
    }, []) as IBasketItem[];
};

export { map };
