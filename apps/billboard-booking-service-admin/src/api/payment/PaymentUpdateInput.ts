import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  status?: "Option1" | null;
};
