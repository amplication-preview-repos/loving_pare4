import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
