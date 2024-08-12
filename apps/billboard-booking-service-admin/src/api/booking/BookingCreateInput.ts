import { BillboardWhereUniqueInput } from "../billboard/BillboardWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type BookingCreateInput = {
  billboard?: BillboardWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  image?: ImageWhereUniqueInput | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  status?: "Option1" | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
