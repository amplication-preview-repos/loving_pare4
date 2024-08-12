import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  status?: "Option1" | null;
};
