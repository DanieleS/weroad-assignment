import { z } from "zod";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import isCreditCard from "validator/es/lib/isCreditCard";

export const TravelersStepZ = z.object({
  travelers: z.number().min(1),
});

export const UserInfoStepZ = z.object({
  fullName: z.string().min(1),
  dateOfBirth: z.date().max(new Date()).nullish(),
  email: z.string().email(),
  phoneNumber: z.string().refine(isMobilePhone),
});

export const PaymentStepZ = z.object({
  cardNumber: z.string().refine(isCreditCard),
  cardHolder: z.string().min(1),
  expirationDate: z.string().regex(/^\d{2}\/\d{2}$/),
  cvv: z.string().length(3),
});
