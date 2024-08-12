import { BookingCreateNestedManyWithoutSubscriptionsInput } from "./BookingCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  bookings?: BookingCreateNestedManyWithoutSubscriptionsInput;
  price?: number | null;
  typeField?: "Option1" | null;
};
