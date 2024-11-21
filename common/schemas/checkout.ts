import { z } from "zod";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import isCreditCard from "validator/es/lib/isCreditCard";

export const TravelersStepZ = z.object({
  travelers: z.number().min(1),
});

export const UserInfoStepZ = z.object({
  fullName: z.string().min(1),
  dateOfBirth: z.date().max(new Date()),
  email: z.string().email(),
  phoneNumber: z.string().refine(isMobilePhone),
});

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ExpirationDate = `${Month}/${number}`;

const ExpirationDateZ = z
  .string()
  .regex(/^\d{1,2}\/\d{4}$/)
  .refine((date): date is ExpirationDate => {
    const [month] = date.split("/");
    return Number(month) >= 1 && Number(month) <= 12;
  });

export const PaymentStepZ = z.object({
  cardNumber: z.string().refine(isCreditCard),
  cardHolder: z.string().min(1),
  expirationDate: ExpirationDateZ,
  cvv: z.string().length(3),
});
