import { IBasketItem } from "../../store/types/IBasketItem";
import { IBasketProduct } from "../../store/types/IBasketProduct";
import { IProduct } from "../../store/types/IProduct";

const mapBasketItems = (items: IBasketProduct[], products: IProduct[]): IBasketItem[] => {
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

const mapSubTotal = (items: IBasketProduct[], products: IProduct[]): number => {
  return items
    .map((item) => {
      const product = products.filter((product) => product.code === item.productCode)[0];
      return product.price * item.quantity;
    }).reduce((a, b) => a + b, 0);
      
};
export { mapBasketItems, mapSubTotal };
