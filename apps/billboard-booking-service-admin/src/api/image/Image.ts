import { Booking } from "../booking/Booking";

export type Image = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  uploadDate: Date | null;
  url: string | null;
};
