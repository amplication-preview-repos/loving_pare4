import { Booking } from "../booking/Booking";

export type Client = {
  address: string | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
