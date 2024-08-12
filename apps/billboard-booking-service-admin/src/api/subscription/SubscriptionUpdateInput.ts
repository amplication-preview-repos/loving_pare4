import { BookingUpdateManyWithoutSubscriptionsInput } from "./BookingUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  bookings?: BookingUpdateManyWithoutSubscriptionsInput;
  price?: number | null;
  typeField?: "Option1" | null;
};
