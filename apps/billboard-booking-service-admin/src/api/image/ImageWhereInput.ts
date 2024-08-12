import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
  url?: StringNullableFilter;
};
