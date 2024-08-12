import { BookingCreateNestedManyWithoutBillboardsInput } from "./BookingCreateNestedManyWithoutBillboardsInput";

export type BillboardCreateInput = {
  bookings?: BookingCreateNestedManyWithoutBillboardsInput;
  location?: string | null;
  size?: string | null;
  status?: "Option1" | null;
};
