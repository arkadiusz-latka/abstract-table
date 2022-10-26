import { ProductModel } from "./types/product.model";

export const products: ProductModel[] = [
  {
    name: 'Chleb',
    description: 'Pyszny chlebek',
    isAvailable: true,
    modificationDate: new Date().toDateString(),
  },
  {
    name: 'Chleb 2',
    description: 'Też dobry chlebek',
    isAvailable: true,
    modificationDate: new Date().toDateString(),
  },
  {
    name: 'Chleb 3',
    description: 'Tani chlebek',
    isAvailable: false,
    modificationDate: new Date().toDateString(),
  },
  {
    name: 'Bułka',
    description: 'Jak nie stać na chleb to kupuj bułki',
    isAvailable: true,
    modificationDate: new Date().toDateString(),
  }
]
