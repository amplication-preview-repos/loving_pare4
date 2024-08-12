import { SortOrder } from "../../util/SortOrder";

export type BillboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  size?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
