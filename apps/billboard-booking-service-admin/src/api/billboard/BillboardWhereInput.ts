import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BillboardWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  size?: StringNullableFilter;
  status?: "Option1";
};
