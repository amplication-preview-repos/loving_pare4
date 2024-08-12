import { BookingUpdateManyWithoutBillboardsInput } from "./BookingUpdateManyWithoutBillboardsInput";

export type BillboardUpdateInput = {
  bookings?: BookingUpdateManyWithoutBillboardsInput;
  location?: string | null;
  size?: string | null;
  status?: "Option1" | null;
};
