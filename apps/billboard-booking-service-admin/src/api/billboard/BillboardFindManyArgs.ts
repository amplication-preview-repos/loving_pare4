import { BillboardWhereInput } from "./BillboardWhereInput";
import { BillboardOrderByInput } from "./BillboardOrderByInput";

export type BillboardFindManyArgs = {
  where?: BillboardWhereInput;
  orderBy?: Array<BillboardOrderByInput>;
  skip?: number;
  take?: number;
};
