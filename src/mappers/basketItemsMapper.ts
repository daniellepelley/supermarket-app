import { IAppliedDiscount } from "../store/types/IAppliedDiscount";
import { IBasketItem } from "../store/types/IBasketItem";
import { IBasketProduct } from "../store/types/IBasketProduct";
import { IProduct } from "../store/types/IProduct";
import toCurrency from "./toCurrency";

const mapBasketItems = (
  items: IBasketProduct[],
  products: IProduct[]
): IBasketItem[] => {
  return items
    .map((item) : IBasketItem[] => {
      const product = products.filter(
        (product) => product.code === item.productCode
      )[0];
      if (!product.unitTitle) {
        return new Array(item.quantity).fill("").map((_, i) => {
          return {
            id: `${product.code}-${i}`,
            title: product.title,
            price: product.price,
            productCode: product.code,
          };
        });
      } else {
        return [
          {
            id: `${product.code}`,
            title: product.title,
            price: product.price * item.quantity,
            productCode: product.code,
            unitsBreakdown: `${item.quantity.toFixed(3)} ${product.unitTitle} @ £${toCurrency(product.price)}/${product.unitTitle}`
          }
        ];
      }
    })
    .reduce((items1: IBasketItem[], items2:IBasketItem[]) => {
      return items1.concat(items2);
    }, []) as IBasketItem[];
};

const mapSubTotal = (items: IBasketProduct[], products: IProduct[]): number => {
  return items
    .map((item) => {
      const product = products.filter(
        (product) => product.code === item.productCode
      )[0];
      return product.price * item.quantity;
    })
    .reduce((number1: number, number2: number) => number1 + number2, 0);
};

const mapTotalSavings = (discounts: IAppliedDiscount[]) => {
  return discounts
    .map((x) => x.discount)
    .reduce((discount: number, total: number) => total + discount, 0);
};

const mapTotal = (
  items: IBasketProduct[],
  products: IProduct[],
  discounts: IAppliedDiscount[]
) => {
  return mapSubTotal(items, products) - mapTotalSavings(discounts);
};

export { mapBasketItems, mapSubTotal, mapTotalSavings, mapTotal };
