import { BookingUpdateManyWithoutClientsInput } from "./BookingUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  bookings?: BookingUpdateManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
