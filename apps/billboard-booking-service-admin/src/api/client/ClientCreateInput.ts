import { BookingCreateNestedManyWithoutClientsInput } from "./BookingCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  bookings?: BookingCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
