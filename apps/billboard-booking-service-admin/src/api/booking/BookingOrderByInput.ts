import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  billboardId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  status?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
