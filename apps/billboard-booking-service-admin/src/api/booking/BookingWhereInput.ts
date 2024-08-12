import { BillboardWhereUniqueInput } from "../billboard/BillboardWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type BookingWhereInput = {
  billboard?: BillboardWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  subscription?: SubscriptionWhereUniqueInput;
};
