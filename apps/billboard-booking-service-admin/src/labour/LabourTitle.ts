import { Labour as TLabour } from "../api/labour/Labour";

export const LABOUR_TITLE_FIELD = "name";

export const LabourTitle = (record: TLabour): string => {
  return record.name?.toString() || String(record.id);
};
