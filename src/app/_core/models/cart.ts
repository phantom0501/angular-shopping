export interface Cart {
  id: Number;
  userId: Number;
  date: Date;
  products: [{ productId: Number; quantity: Number }];
}
