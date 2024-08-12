import { LabourWhereInput } from "./LabourWhereInput";
import { LabourOrderByInput } from "./LabourOrderByInput";

export type LabourFindManyArgs = {
  where?: LabourWhereInput;
  orderBy?: Array<LabourOrderByInput>;
  skip?: number;
  take?: number;
};
