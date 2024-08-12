import { Billboard } from "../billboard/Billboard";
import { Client } from "../client/Client";
import { Image } from "../image/Image";
import { Payment } from "../payment/Payment";
import { Subscription } from "../subscription/Subscription";

export type Booking = {
  billboard?: Billboard | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
