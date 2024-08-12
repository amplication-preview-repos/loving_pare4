import { Billboard as TBillboard } from "../api/billboard/Billboard";

export const BILLBOARD_TITLE_FIELD = "location";

export const BillboardTitle = (record: TBillboard): string => {
  return record.location?.toString() || String(record.id);
};
