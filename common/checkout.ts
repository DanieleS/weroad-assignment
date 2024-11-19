import { z } from "zod";
import {
  PaymentStepZ,
  TravelersStepZ,
  UserInfoStepZ,
} from "~/common/schemas/checkout";

export type TravelersStep = z.infer<typeof TravelersStepZ>;

export type UserInfoStep = z.infer<typeof UserInfoStepZ>;

export type PaymentStep = z.infer<typeof PaymentStepZ>;

export type Checkout = {
  travelers: TravelersStep;
  userInfo: UserInfoStep;
  payment: PaymentStep;
};
