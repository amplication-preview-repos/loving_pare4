import { BillboardWhereUniqueInput } from "../billboard/BillboardWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type BookingUpdateInput = {
  billboard?: BillboardWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  image?: ImageWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  status?: "Option1" | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
