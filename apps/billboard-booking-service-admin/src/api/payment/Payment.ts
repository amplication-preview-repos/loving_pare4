import { Booking } from "../booking/Booking";

export type Payment = {
  amount: number | null;
  booking?: Booking | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
