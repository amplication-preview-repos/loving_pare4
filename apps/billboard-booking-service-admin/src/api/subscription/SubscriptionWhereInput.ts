import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SubscriptionWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  typeField?: "Option1";
};
