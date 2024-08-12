import { Booking } from "../booking/Booking";

export type Subscription = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  price: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
