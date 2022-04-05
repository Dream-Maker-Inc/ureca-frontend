import { BrnInfo } from "./models/BRNInfo.model";

export type FindBrnInfoDto = {
  b_no: string;
  b_stt: string;
  b_stt_cd: string;
  tax_type: string;
  tax_type_cd: string;
  end_dt: string;
  utcc_yn: string;
  tax_type_change_dt: string;
  invoice_apply_dt: string;
};

export type FindBrnInfoResponse = {
  data: FindBrnInfoDto[];
};

export interface BRNApiInterface {
  findBrnInfo(brn: string): Promise<BrnInfo>;
}
