import { BookingCreateNestedManyWithoutImagesInput } from "./BookingCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  bookings?: BookingCreateNestedManyWithoutImagesInput;
  uploadDate?: Date | null;
  url?: string | null;
};
