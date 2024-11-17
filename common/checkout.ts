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
  paymentMethod: PaymentMethod;
};

export type PaymentMethod =
  | {
      type: "creditCard";
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      cvv: string;
    }
  | {
      type: "paypal";
    };

export type Checkout = {
  travelers: TravelersStep;
  userInfo: UserInfoStep;
  payment: PaymentStep;
};
