export type TravelersStep = {
  travelers: number;
};

export type UserInfoStep = {
  fullName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
};

export type PaymentStep = {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
};

export type Checkout = {
  travelers: TravelersStep;
  userInfo: UserInfoStep;
  payment: PaymentStep;
};
