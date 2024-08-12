import { Booking } from "../booking/Booking";

export type Billboard = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  location: string | null;
  size: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
