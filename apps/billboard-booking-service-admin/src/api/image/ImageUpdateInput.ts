import { BookingUpdateManyWithoutImagesInput } from "./BookingUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  bookings?: BookingUpdateManyWithoutImagesInput;
  uploadDate?: Date | null;
  url?: string | null;
};
